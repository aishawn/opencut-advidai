import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { AwsClient } from "aws4fetch";
import { nanoid } from "nanoid";
import { env } from "@/env";
import { baseRateLimit } from "@/lib/rate-limit";
import { 
  isR2Configured, 
  updateExportJobStatus, 
  getExportJobStatus,
  type ExportJobStatus 
} from "@/lib/export-utils";
import { renderVideoWithFFmpeg, type VideoRenderOptions } from "@/lib/server-video-renderer";

// 请求数据验证
const exportRequestSchema = z.object({
  project: z.object({
    id: z.string(),
    name: z.string(),
    canvasSize: z.object({
      width: z.number().positive(),
      height: z.number().positive(),
    }),
    fps: z.number().positive().optional(),
    backgroundColor: z.string().optional(),
    backgroundType: z.enum(["color", "blur"]).optional(),
    blurIntensity: z.number().optional(),
  }),
  tracks: z.array(z.object({
    id: z.string(),
    name: z.string(),
    type: z.enum(["media", "text", "audio"]),
    elements: z.array(z.union([
      // MediaElement
      z.object({
        id: z.string(),
        name: z.string(),
        type: z.literal("media"),
        mediaId: z.string(),
        startTime: z.number(),
        duration: z.number(),
        trimStart: z.number(),
        trimEnd: z.number(),
        hidden: z.boolean().optional(),
        muted: z.boolean().optional(),
      }),
      // TextElement
      z.object({
        id: z.string(),
        name: z.string(),
        type: z.literal("text"),
        content: z.string(),
        fontSize: z.number(),
        fontFamily: z.string(),
        color: z.string(),
        backgroundColor: z.string(),
        textAlign: z.enum(["left", "center", "right"]),
        fontWeight: z.enum(["normal", "bold"]),
        fontStyle: z.enum(["normal", "italic"]),
        textDecoration: z.enum(["none", "underline", "line-through"]),
        x: z.number(),
        y: z.number(),
        rotation: z.number(),
        opacity: z.number(),
        startTime: z.number(),
        duration: z.number(),
        trimStart: z.number(),
        trimEnd: z.number(),
        hidden: z.boolean().optional(),
      }),
    ])),
    muted: z.boolean().optional(),
    isMain: z.boolean().optional(),
  })),
  mediaFiles: z.array(z.object({
    id: z.string(),
    name: z.string(),
    type: z.enum(["image", "video", "audio"]),
    data: z.string(), // Base64 编码的文件数据
    duration: z.number().optional(),
    width: z.number().optional(),
    height: z.number().optional(),
    fps: z.number().optional(),
  })),
  exportOptions: z.object({
    format: z.enum(["mp4", "webm"]).default("mp4"),
    quality: z.enum(["low", "medium", "high", "very_high"]).default("high"),
    fps: z.number().positive().optional(),
    includeAudio: z.boolean().default(true),
  }),
});

const apiResponseSchema = z.object({
  success: z.boolean(),
  videoUrl: z.string().url().optional(),
  error: z.string().optional(),
  jobId: z.string().optional(),
  message: z.string().optional(),
});


export async function POST(request: NextRequest) {
  try {
    // 速率限制
    const ip = request.headers.get("x-forwarded-for") ?? "anonymous";
    const { success } = await baseRateLimit.limit(ip);

    if (!success) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    // 检查R2配置
    const r2Config = isR2Configured();
    if (!r2Config.configured) {
      return NextResponse.json(
        {
          error: "R2 not configured",
          message: `Video export requires environment variables: ${r2Config.missingVars.join(", ")}. Check README for setup instructions.`,
        },
        { status: 503 }
      );
    }

    // 验证请求数据
    const rawBody = await request.json().catch(() => null);
    if (!rawBody) {
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400 }
      );
    }

    const validationResult = exportRequestSchema.safeParse(rawBody);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Invalid request parameters",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { project, tracks, mediaFiles, exportOptions } = validationResult.data;

    // 验证项目数据
    if (!project.canvasSize || project.canvasSize.width <= 0 || project.canvasSize.height <= 0) {
      return NextResponse.json(
        { error: "Invalid canvas size" },
        { status: 400 }
      );
    }

    if (tracks.length === 0) {
      return NextResponse.json(
        { error: "No tracks provided" },
        { status: 400 }
      );
    }

    // 生成唯一的任务ID
    const jobId = nanoid();

    // 异步处理视频导出
    await queueVideoExport({
      jobId,
      project,
      tracks,
      mediaFiles,
      exportOptions,
    });

    return NextResponse.json({
      success: true,
      jobId,
      message: "Video export job started",
    });

  } catch (error) {
    console.error("Export API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// 检查导出状态的API
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const jobId = searchParams.get("jobId");

    if (!jobId) {
      return NextResponse.json(
        { error: "Missing jobId parameter" },
        { status: 400 }
      );
    }

    // 检查任务状态
    const status = await getExportJobStatus(jobId);
    
    return NextResponse.json(status);
  } catch (error) {
    console.error("Get export status error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}


// 队列视频导出任务 (异步处理)
async function queueVideoExport({
  jobId,
  project,
  tracks,
  mediaFiles,
  exportOptions,
}: {
  jobId: string;
  project: any;
  tracks: any[];
  mediaFiles: any[];
  exportOptions: any;
}) {
  // 这里应该将任务加入队列系统 (如 Redis, Bull Queue, 等)
  // 为了简化，我们直接处理
  try {
    // 更新任务状态为处理中
    await updateExportJobStatus(jobId, {
      success: true,
      status: "processing",
      progress: 0,
    });

    // 处理视频导出
    const videoUrl = await processVideoExport({
      jobId,
      project,
      tracks,
      mediaFiles,
      exportOptions,
    });

    // 更新任务状态为完成
    await updateExportJobStatus(jobId, {
      success: true,
      status: "completed",
      videoUrl,
      progress: 100,
    });
  } catch (error) {
    // 更新任务状态为失败
    await updateExportJobStatus(jobId, {
      success: false,
      status: "failed",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}

// 视频处理函数
async function processVideoExport({
  jobId,
  project,
  tracks,
  mediaFiles,
  exportOptions,
}: {
  jobId: string;
  project: any;
  tracks: any[];
  mediaFiles: any[];
  exportOptions: any;
}) {
  // 1. 解码媒体文件
  const decodedMediaFiles = await Promise.all(
    mediaFiles.map(async (media) => ({
      ...media,
      file: new File([Buffer.from(media.data, 'base64')], media.name),
    }))
  );

  // 2. 使用服务端视频渲染器
  const videoBuffer = await processVideoWithRenderer({
    project,
    tracks,
    mediaFiles: decodedMediaFiles,
    exportOptions,
  });

  // 3. 上传到 R2
  const videoUrl = await uploadToR2(videoBuffer, `exports/${jobId}.${exportOptions.format}`);

  return videoUrl;
}

// 使用服务端视频渲染器
async function processVideoWithRenderer({
  project,
  tracks,
  mediaFiles,
  exportOptions,
}: {
  project: any;
  tracks: any[];
  mediaFiles: any[];
  exportOptions: any;
}): Promise<ArrayBuffer> {
  const renderOptions: VideoRenderOptions = {
    project,
    tracks,
    mediaFiles,
    exportOptions,
  };

  return await renderVideoWithFFmpeg(renderOptions);
}

// R2 上传函数
async function uploadToR2(buffer: ArrayBuffer, key: string): Promise<string> {
  const client = new AwsClient({
    accessKeyId: env.R2_ACCESS_KEY_ID,
    secretAccessKey: env.R2_SECRET_ACCESS_KEY,
    region: "auto",
  });

  const response = await client.fetch(
    `https://${env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com/${env.R2_BUCKET_NAME}/${key}`,
    {
      method: "PUT",
      body: buffer,
      headers: {
        "Content-Type": "video/mp4",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to upload to R2: ${response.statusText}`);
  }

  // 返回公开访问URL
  return `https://pub-${env.CLOUDFLARE_ACCOUNT_ID}.r2.dev/${key}`;
}
