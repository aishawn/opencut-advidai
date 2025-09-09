// 客户端导出API调用工具
export interface ExportRequest {
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

export interface ExportResponse {
  success: boolean;
  jobId?: string;
  videoUrl?: string;
  error?: string;
  message?: string;
}

export interface ExportStatusResponse {
  success: boolean;
  status: "pending" | "processing" | "completed" | "failed";
  videoUrl?: string;
  error?: string;
  progress?: number;
}

// 开始视频导出
export async function startVideoExport(request: ExportRequest): Promise<ExportResponse> {
  try {
    const response = await fetch("/api/export", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to start video export:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

// 检查导出状态
export async function checkExportStatus(jobId: string): Promise<ExportStatusResponse> {
  try {
    const response = await fetch(`/api/export?jobId=${jobId}`, {
      method: "GET",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to check export status:", error);
    return {
      success: false,
      status: "failed",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

// 轮询导出状态直到完成
export async function waitForExportCompletion(
  jobId: string,
  onProgress?: (progress: number) => void,
  maxWaitTime: number = 300000 // 5 minutes
): Promise<ExportStatusResponse> {
  const startTime = Date.now();
  
  while (Date.now() - startTime < maxWaitTime) {
    const status = await checkExportStatus(jobId);
    
    if (status.success) {
      if (status.progress !== undefined) {
        onProgress?.(status.progress);
      }
      
      if (status.status === "completed" || status.status === "failed") {
        return status;
      }
    }
    
    // 等待2秒后再次检查
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  return {
    success: false,
    status: "failed",
    error: "Export timeout",
  };
}

// 将File对象转换为Base64
export async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      // 移除data:前缀，只保留base64数据
      const base64 = result.split(",")[1];
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// 从项目数据构建导出请求
export async function buildExportRequest(
  project: any,
  tracks: any[],
  mediaFiles: any[],
  exportOptions: any
): Promise<ExportRequest> {
  // 转换媒体文件为Base64
  const mediaFilesWithBase64 = await Promise.all(
    mediaFiles.map(async (media) => ({
      ...media,
      data: await fileToBase64(media.file),
    }))
  );

  return {
    project,
    tracks,
    mediaFiles: mediaFilesWithBase64,
    exportOptions,
  };
}
