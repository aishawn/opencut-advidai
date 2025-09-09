# 项目存储系统文档

## 概述

OpenCut 项目存储系统支持项目的导入和导出功能，允许用户备份、分享和迁移视频编辑项目。

## 文件格式

项目存储文件使用 `.opencut` 扩展名，是一个 JSON 格式的文件，包含以下信息：

- **项目元数据**: 名称、描述、缩略图、画布尺寸等
- **项目数据**: 场景、时间轴、媒体文件等
- **媒体文件**: Base64 编码的媒体文件数据
- **时间轴数据**: 轨道、元素、时间信息等

## 功能特性

### ✅ 已实现功能

- **单项目导入/导出**: 支持单个项目的导入和导出
- **批量导入/导出**: 支持多个项目的批量操作
- **文件验证**: 验证导入文件的格式和完整性
- **进度跟踪**: 显示导入/导出进度
- **错误处理**: 完整的错误处理和用户反馈
- **选项配置**: 可配置导入/导出选项

### 🔄 导入选项

- **包含媒体文件**: 是否导入媒体文件
- **包含时间轴**: 是否导入时间轴数据
- **项目名称**: 设置导入后的项目名称

### 🔄 导出选项

- **包含媒体文件**: 是否导出媒体文件
- **包含时间轴**: 是否导出时间轴数据
- **压缩媒体文件**: 是否压缩媒体文件以减小文件大小
- **媒体质量**: 选择媒体文件的压缩质量
- **生成缩略图**: 是否为项目生成缩略图

## 使用方法

### 1. 单项目导入/导出

#### 在项目页面使用

```tsx
import { ProjectActions } from "@/components/project-import-export/project-actions";

// 导入按钮
<ProjectActions onImportComplete={() => window.location.reload()}>
  <Button variant="outline" size="sm">
    <Upload className="h-4 w-4 mr-2" />
    Import
  </Button>
</ProjectActions>

// 导出按钮
<ProjectActions projectId={projectId}>
  <Button variant="outline" size="sm">
    <Download className="h-4 w-4 mr-2" />
    Export
  </Button>
</ProjectActions>
```

#### 在项目卡片下拉菜单中使用

```tsx
<ProjectActions projectId={project.id}>
  <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
    <Download className="h-4 w-4 mr-2" />
    Export
  </DropdownMenuItem>
</ProjectActions>
```

### 2. 批量导入/导出

```tsx
import { BulkImportExport } from "@/components/project-import-export/bulk-import-export";

<BulkImportExport
  selectedProjects={Array.from(selectedProjects)}
  onComplete={() => window.location.reload()}
>
  <Button variant="outline">
    <Download className="h-4 w-4 mr-2" />
    Export Selected ({selectedProjects.size})
  </Button>
</BulkImportExport>;
```

### 3. 编程式使用

```typescript
import {
  exportProjectToFile,
  importProjectFromFile,
  validateProjectFile
} from "@/lib/project-storage";

// 导出项目
const result = await exportProjectToFile(projectId, {
  includeMediaFiles: true,
  includeTimeline: true,
  compressMediaFiles: false,
  quality: "high",
  generateThumbnail: true,
});

if (result.success && result.fileData) {
  // 下载文件
  const blob = new Blob([result.fileData], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = result.fileName || "project.opencut";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// 导入项目
const file = // 用户选择的文件
const arrayBuffer = await file.arrayBuffer();

const result = await importProjectFromFile(arrayBuffer, {
  includeMediaFiles: true,
  includeTimeline: true,
  mergeWithExisting: false,
  newProjectName: "Imported Project",
});

if (result.success && result.projectId) {
  // 跳转到新项目
  router.push(`/editor/${result.projectId}`);
}
```

## 文件结构

```
apps/web/src/
├── types/
│   └── project-storage.ts          # 存储文件类型定义
├── lib/
│   └── project-storage.ts          # 核心存储逻辑
└── components/project-import-export/
    ├── import-export-dialog.tsx    # 导入/导出对话框
    ├── project-actions.tsx         # 项目操作组件
    └── bulk-import-export.tsx      # 批量导入/导出组件
```

## 类型定义

### 项目存储文件

```typescript
interface ProjectStorageFile {
  version: string;
  metadata: ProjectMetadata;
  project: SerializedProject;
  mediaFiles: SerializedMediaFile[];
  timeline: SerializedTimeline;
  createdAt: string;
  exportedBy: string;
}
```

### 导入/导出选项

```typescript
interface ProjectImportOptions {
  includeMediaFiles: boolean;
  includeTimeline: boolean;
  mergeWithExisting?: boolean;
  newProjectName?: string;
}

interface ProjectExportOptions {
  includeMediaFiles: boolean;
  includeTimeline: boolean;
  compressMediaFiles: boolean;
  quality: "low" | "medium" | "high";
  generateThumbnail: boolean;
}
```

## 错误处理

系统包含完整的错误处理机制：

- **文件验证**: 检查文件格式和完整性
- **类型检查**: 验证数据类型和结构
- **用户反馈**: 显示错误信息和警告
- **进度跟踪**: 显示操作进度
- **回滚机制**: 失败时清理临时数据

## 性能考虑

- **异步处理**: 所有操作都是异步的，避免阻塞 UI
- **进度更新**: 实时显示操作进度
- **内存管理**: 及时清理临时数据
- **文件大小**: 支持大文件的导入/导出
- **批量操作**: 支持批量导入/导出多个项目

## 限制

- **文件大小**: 受浏览器内存限制
- **媒体文件**: 大媒体文件会增加文件大小
- **浏览器兼容性**: 需要支持 File API 和 ArrayBuffer
- **网络**: 大文件上传/下载需要稳定的网络连接

## 未来改进

- [ ] 支持云存储集成
- [ ] 添加项目模板功能
- [ ] 支持增量导入/导出
- [ ] 添加项目版本控制
- [ ] 支持项目合并功能
- [ ] 添加项目分享链接
- [ ] 支持项目协作功能
