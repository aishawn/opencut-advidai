import { exec } from "child_process";
import { promisify } from "util";
import { writeFile, mkdtemp, rm } from "fs/promises";
import { join } from "path";
import { tmpdir } from "os";

const execAsync = promisify(exec);

export interface VideoRenderOptions {
  project: {
    canvasSize: { width: number; height: number };
    fps?: number;
    backgroundColor?: string;
    backgroundType?: "color" | "blur";
    blurIntensity?: number;
  };
  tracks: Array<{
    id: string;
    type: "media" | "text" | "audio";
    elements: Array<{
      type: "media" | "text";
      startTime: number;
      duration: number;
      trimStart: number;
      trimEnd: number;
      // Media element properties
      mediaId?: string;
      // Text element properties
      content?: string;
      fontSize?: number;
      fontFamily?: string;
      color?: string;
      x?: number;
      y?: number;
      rotation?: number;
      opacity?: number;
    }>;
  }>;
  mediaFiles: Array<{
    id: string;
    name: string;
    type: "image" | "video" | "audio";
    file: File;
  }>;
  exportOptions: {
    format: "mp4" | "webm";
    quality: "low" | "medium" | "high" | "very_high";
    fps?: number;
    includeAudio: boolean;
  };
}

export async function renderVideoWithFFmpeg(options: VideoRenderOptions): Promise<ArrayBuffer> {
  const { project, tracks, mediaFiles, exportOptions } = options;
  
  // 创建临时目录
  const tempDir = await mkdtemp(join(tmpdir(), "video-export-"));
  
  try {
    // 1. 准备媒体文件
    const mediaMap = new Map<string, string>();
    for (const mediaFile of mediaFiles) {
      const filePath = join(tempDir, mediaFile.name);
      const buffer = await mediaFile.file.arrayBuffer();
      await writeFile(filePath, Buffer.from(buffer));
      mediaMap.set(mediaFile.id, filePath);
    }

    // 2. 生成FFmpeg命令
    const ffmpegCommand = generateFFmpegCommand({
      project,
      tracks,
      mediaMap,
      exportOptions,
      outputPath: join(tempDir, "output.mp4"),
    });

    // 3. 执行FFmpeg命令
    console.log("Executing FFmpeg command:", ffmpegCommand);
    const { stdout, stderr } = await execAsync(ffmpegCommand);
    
    if (stderr) {
      console.warn("FFmpeg stderr:", stderr);
    }

    // 4. 读取输出文件
    const outputPath = join(tempDir, "output.mp4");
    const outputBuffer = await readFile(outputPath);
    
    // 将Buffer转换为ArrayBuffer
    const arrayBuffer = new ArrayBuffer(outputBuffer.length);
    const view = new Uint8Array(arrayBuffer);
    for (let i = 0; i < outputBuffer.length; i++) {
      view[i] = outputBuffer[i];
    }
    
    return arrayBuffer;

  } finally {
    // 清理临时文件
    await rm(tempDir, { recursive: true, force: true });
  }
}

function generateFFmpegCommand({
  project,
  tracks,
  mediaMap,
  exportOptions,
  outputPath,
}: {
  project: VideoRenderOptions["project"];
  tracks: VideoRenderOptions["tracks"];
  mediaMap: Map<string, string>;
  exportOptions: VideoRenderOptions["exportOptions"];
  outputPath: string;
}): string {
  const { canvasSize, fps = 30, backgroundColor = "#000000" } = project;
  const { format, quality, includeAudio } = exportOptions;

  // 质量设置
  const qualitySettings = {
    low: { videoBitrate: "500k", audioBitrate: "64k" },
    medium: { videoBitrate: "1000k", audioBitrate: "128k" },
    high: { videoBitrate: "2000k", audioBitrate: "192k" },
    very_high: { videoBitrate: "4000k", audioBitrate: "320k" },
  };

  const { videoBitrate, audioBitrate } = qualitySettings[quality];

  // 构建FFmpeg命令
  let command = `ffmpeg -y -f lavfi -i color=c=${backgroundColor.replace("#", "")}:size=${canvasSize.width}x${canvasSize.height}:duration=10 -r ${fps}`;

  // 添加视频输入
  const videoTracks = tracks.filter(track => track.type === "media");
  for (const track of videoTracks) {
    for (const element of track.elements) {
      if (element.type === "media" && element.mediaId) {
        const mediaPath = mediaMap.get(element.mediaId);
        if (mediaPath) {
          const startTime = element.startTime;
          const duration = element.duration - element.trimStart - element.trimEnd;
          command += ` -ss ${startTime} -t ${duration} -i "${mediaPath}"`;
        }
      }
    }
  }

  // 添加音频输入
  if (includeAudio) {
    const audioTracks = tracks.filter(track => track.type === "audio");
    for (const track of audioTracks) {
      for (const element of track.elements) {
        if (element.type === "media" && element.mediaId) {
          const mediaPath = mediaMap.get(element.mediaId);
          if (mediaPath) {
            const startTime = element.startTime;
            const duration = element.duration - element.trimStart - element.trimEnd;
            command += ` -ss ${startTime} -t ${duration} -i "${mediaPath}"`;
          }
        }
      }
    }
  }

  // 输出设置
  command += ` -c:v libx264 -b:v ${videoBitrate} -c:a aac -b:a ${audioBitrate}`;
  command += ` -pix_fmt yuv420p -movflags +faststart`;
  command += ` "${outputPath}"`;

  return command;
}

// 简化的文本渲染实现
export async function renderTextOverlay(
  canvas: HTMLCanvasElement,
  textElement: {
    content: string;
    fontSize: number;
    fontFamily: string;
    color: string;
    x: number;
    y: number;
    rotation: number;
    opacity: number;
  }
): Promise<void> {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.save();
  
  // 设置文本样式
  ctx.font = `${textElement.fontSize}px ${textElement.fontFamily}`;
  ctx.fillStyle = textElement.color;
  ctx.globalAlpha = textElement.opacity;
  
  // 移动到文本位置
  ctx.translate(textElement.x, textElement.y);
  ctx.rotate((textElement.rotation * Math.PI) / 180);
  
  // 绘制文本
  ctx.fillText(textElement.content, 0, 0);
  
  ctx.restore();
}

// 读取文件的辅助函数
async function readFile(path: string): Promise<Buffer> {
  const { readFile: fsReadFile } = await import("fs/promises");
  return fsReadFile(path);
}
