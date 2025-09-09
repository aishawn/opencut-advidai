# 视频导出 API 文档

## 概述

这个 API 允许用户将视频编辑项目导出为 MP4 格式，并上传到 Cloudflare R2 存储。

## 环境变量配置

在 `.env.local` 中添加以下环境变量：

```bash
# Cloudflare R2 配置
CLOUDFLARE_ACCOUNT_ID=your_account_id
R2_ACCESS_KEY_ID=your_access_key
R2_SECRET_ACCESS_KEY=your_secret_key
R2_BUCKET_NAME=your_bucket_name
```

## API 端点

### POST /api/export

开始视频导出任务。

#### 请求体

```typescript
{
  project: {
    id: string;
    name: string;
    canvasSize: {
      width: number;
      height: number;
    };
    fps?: number;
    backgroundColor?: string;
    backgroundType?: "color" | "blur";
    blurIntensity?: number;
  };
  tracks: Array<{
    id: string;
    name: string;
    type: "media" | "text" | "audio";
    elements: Array<{
      id: string;
      name: string;
      type: "media" | "text";
      startTime: number;
      duration: number;
      trimStart: number;
      trimEnd: number;
      hidden?: boolean;
      // Media element properties
      mediaId?: string;
      muted?: boolean;
      // Text element properties
      content?: string;
      fontSize?: number;
      fontFamily?: string;
      color?: string;
      backgroundColor?: string;
      textAlign?: "left" | "center" | "right";
      fontWeight?: "normal" | "bold";
      fontStyle?: "normal" | "italic";
      textDecoration?: "none" | "underline" | "line-through";
      x?: number;
      y?: number;
      rotation?: number;
      opacity?: number;
    }>;
    muted?: boolean;
    isMain?: boolean;
  }>;
  mediaFiles: Array<{
    id: string;
    name: string;
    type: "image" | "video" | "audio";
    data: string; // Base64 encoded
    duration?: number;
    width?: number;
    height?: number;
    fps?: number;
  }>;
  exportOptions: {
    format: "mp4" | "webm";
    quality: "low" | "medium" | "high" | "very_high";
    fps?: number;
    includeAudio: boolean;
  };
}
```

#### 响应

```typescript
{
  success: boolean;
  jobId?: string;
  message?: string;
  error?: string;
}
```

### GET /api/export?jobId={jobId}

检查导出任务状态。

#### 响应

```typescript
{
  success: boolean;
  status: "pending" | "processing" | "completed" | "failed";
  videoUrl?: string;
  error?: string;
  progress?: number;
}
```

## 使用示例

### 客户端调用

```typescript
import {
  startVideoExport,
  checkExportStatus,
  waitForExportCompletion,
  buildExportRequest,
} from "@/lib/export-client";

// 1. 构建导出请求
const exportRequest = await buildExportRequest(project, tracks, mediaFiles, {
  format: "mp4",
  quality: "high",
  includeAudio: true,
});

// 2. 开始导出
const result = await startVideoExport(exportRequest);

if (result.success && result.jobId) {
  // 3. 等待导出完成
  const finalResult = await waitForExportCompletion(result.jobId, (progress) =>
    console.log(`Progress: ${progress}%`)
  );

  if (finalResult.success && finalResult.videoUrl) {
    console.log("Export completed:", finalResult.videoUrl);
  }
}
```

### React 组件使用

```tsx
import { ExportExample } from "@/components/export/export-example";

function MyComponent() {
  return <ExportExample />;
}
```

## 技术实现

### 服务端渲染

API 使用 FFmpeg 进行服务端视频渲染：

1. **媒体文件处理**: 将 Base64 编码的媒体文件解码并保存到临时目录
2. **FFmpeg 命令生成**: 根据项目配置生成 FFmpeg 命令
3. **视频合成**: 执行 FFmpeg 命令合成最终视频
4. **文件上传**: 将生成的视频上传到 Cloudflare R2

### 质量设置

| 质量等级  | 视频码率 | 音频码率 |
| --------- | -------- | -------- |
| low       | 500k     | 64k      |
| medium    | 1000k    | 128k     |
| high      | 2000k    | 192k     |
| very_high | 4000k    | 320k     |

### 错误处理

API 包含完整的错误处理：

- 输入验证
- 速率限制
- R2 配置检查
- 文件处理错误
- 网络错误

### 性能考虑

- 异步处理避免请求超时
- 临时文件自动清理
- 内存使用优化
- 进度跟踪

## 限制

- 最大文件大小: 取决于服务器配置
- 最大导出时长: 建议不超过 10 分钟
- 并发导出: 受服务器资源限制
- 支持的格式: MP4, WebM

## 故障排除

### 常见错误

1. **R2 not configured**: 检查环境变量配置
2. **Invalid canvas size**: 确保画布尺寸有效
3. **No tracks provided**: 确保至少有一个轨道
4. **Export timeout**: 导出时间过长，检查项目复杂度

### 调试

启用详细日志：

```bash
DEBUG=export:* npm run dev
```

## 未来改进

- [ ] 支持更多视频格式
- [ ] 添加视频滤镜和特效
- [ ] 实现队列系统 (Redis/Bull)
- [ ] 添加导出历史记录
- [ ] 支持批量导出
- [ ] 添加导出模板
