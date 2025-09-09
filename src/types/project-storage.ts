// 项目存储文件格式定义
export interface ProjectStorageFile {
  version: string; // 文件格式版本
  metadata: ProjectMetadata;
  project: SerializedProject;
  mediaFiles: SerializedMediaFile[];
  timeline: SerializedTimeline;
  createdAt: string;
  exportedBy: string; // 导出者信息
}

// 项目元数据
export interface ProjectMetadata {
  name: string;
  description?: string;
  tags?: string[];
  thumbnail?: string; // Base64 缩略图
  duration: number; // 项目总时长（秒）
  canvasSize: {
    width: number;
    height: number;
  };
  fps: number;
  backgroundColor?: string;
  backgroundType?: "color" | "blur";
  blurIntensity?: number;
}

// 序列化的项目数据
export interface SerializedProject {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  scenes: SerializedScene[];
  currentSceneId: string;
  canvasSize: {
    width: number;
    height: number;
  };
  canvasMode: "preset" | "original" | "custom";
  fps?: number;
  backgroundColor?: string;
  backgroundType?: "color" | "blur";
  blurIntensity?: number;
  bookmarks?: number[];
}

// 序列化的场景数据
export interface SerializedScene {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

// 序列化的媒体文件
export interface SerializedMediaFile {
  id: string;
  name: string;
  type: "image" | "video" | "audio";
  data: string; // Base64 编码的文件数据
  size: number;
  duration?: number;
  width?: number;
  height?: number;
  fps?: number;
  mimeType: string;
  lastModified: number;
  thumbnail?: string; // Base64 缩略图
}

// 序列化的时间轴数据
export interface SerializedTimeline {
  tracks: SerializedTrack[];
  totalDuration: number;
  playheadPosition: number;
  zoomLevel: number;
}

// 序列化的轨道数据
export interface SerializedTrack {
  id: string;
  name: string;
  type: "media" | "text" | "audio";
  elements: SerializedElement[];
  muted?: boolean;
  isMain?: boolean;
  order: number;
}

// 序列化的元素数据
export interface SerializedElement {
  id: string;
  name: string;
  type: "media" | "text";
  startTime: number;
  duration: number;
  trimStart: number;
  trimEnd: number;
  hidden?: boolean;
  muted?: boolean;
  
  // Media element properties
  mediaId?: string;
  
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
}

// 导入/导出选项
export interface ProjectImportOptions {
  includeMediaFiles: boolean;
  includeTimeline: boolean;
  mergeWithExisting?: boolean; // 是否与现有项目合并
  newProjectName?: string; // 导入时的新项目名称
}

export interface ProjectExportOptions {
  includeMediaFiles: boolean;
  includeTimeline: boolean;
  compressMediaFiles: boolean; // 是否压缩媒体文件
  quality: "low" | "medium" | "high"; // 媒体文件压缩质量
  generateThumbnail: boolean; // 是否生成缩略图
  exportFormat: "opencut" | "zip"; // 导出格式：单个文件或压缩包
}

// 导入/导出结果
export interface ProjectImportResult {
  success: boolean;
  projectId?: string;
  error?: string;
  warnings?: string[];
  importedMediaCount?: number;
  importedTracksCount?: number;
}

export interface ProjectExportResult {
  success: boolean;
  fileData?: ArrayBuffer;
  fileName?: string;
  fileSize?: number;
  error?: string;
}

// 文件验证结果
export interface ProjectFileValidation {
  isValid: boolean;
  version?: string;
  errors: string[];
  warnings: string[];
  metadata?: ProjectMetadata;
}
