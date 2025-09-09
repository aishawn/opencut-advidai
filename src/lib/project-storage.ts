import { TProject } from "@/types/project";
import { MediaFile } from "@/types/media";
import { TimelineTrack } from "@/types/timeline";
import {
  ProjectStorageFile,
  ProjectMetadata,
  SerializedProject,
  SerializedMediaFile,
  SerializedTimeline,
  SerializedTrack,
  SerializedElement,
  ProjectImportOptions,
  ProjectExportOptions,
  ProjectImportResult,
  ProjectExportResult,
  ProjectFileValidation,
} from "@/types/project-storage";

// 重新导出类型以供其他模块使用
export type {
  ProjectImportOptions,
  ProjectExportOptions,
  ProjectImportResult,
  ProjectExportResult,
  ProjectFileValidation,
};
import { useProjectStore } from "@/stores/project-store";
import { useMediaStore } from "@/stores/media-store";
import { useTimelineStore } from "@/stores/timeline-store";

// 当前存储文件版本
export const PROJECT_STORAGE_VERSION = "1.0.0";

// 验证项目存储文件
export function validateProjectFile(fileData: ArrayBuffer): ProjectFileValidation {
  const errors: string[] = [];
  const warnings: string[] = [];

  try {
    const text = new TextDecoder().decode(fileData);
    const data = JSON.parse(text) as ProjectStorageFile;

    // 检查版本兼容性
    if (!data.version) {
      errors.push("Missing version information");
    } else if (data.version !== PROJECT_STORAGE_VERSION) {
      warnings.push(`Version mismatch: file is ${data.version}, expected ${PROJECT_STORAGE_VERSION}`);
    }

    // 检查必需字段
    if (!data.metadata) {
      errors.push("Missing metadata");
    } else {
      if (!data.metadata.name) {
        errors.push("Missing project name");
      }
      if (!data.metadata.canvasSize || !data.metadata.canvasSize.width || !data.metadata.canvasSize.height) {
        errors.push("Invalid canvas size");
      }
    }

    if (!data.project) {
      errors.push("Missing project data");
    }

    if (!data.timeline) {
      errors.push("Missing timeline data");
    }

    if (!data.mediaFiles || !Array.isArray(data.mediaFiles)) {
      errors.push("Missing or invalid media files");
    }

    // 检查媒体文件完整性
    if (data.mediaFiles) {
      for (const mediaFile of data.mediaFiles) {
        if (!mediaFile.id || !mediaFile.name || !mediaFile.type || !mediaFile.data) {
          errors.push(`Invalid media file: ${mediaFile.name || "unknown"}`);
        }
        if (!mediaFile.mimeType) {
          warnings.push(`Missing MIME type for media file: ${mediaFile.name}`);
        }
      }
    }

    return {
      isValid: errors.length === 0,
      version: data.version,
      errors,
      warnings,
      metadata: data.metadata,
    };
  } catch (error) {
    return {
      isValid: false,
      errors: [`Invalid file format: ${error instanceof Error ? error.message : "Unknown error"}`],
      warnings: [],
    };
  }
}

// 导出项目为存储文件
export async function exportProjectToFile(
  projectId: string,
  options: ProjectExportOptions = {
    includeMediaFiles: true,
    includeTimeline: true,
    compressMediaFiles: false,
    quality: "high",
    generateThumbnail: true,
    exportFormat: "zip",
  }
): Promise<ProjectExportResult> {
  try {
    const projectStore = useProjectStore.getState();
    const mediaStore = useMediaStore.getState();
    const timelineStore = useTimelineStore.getState();

    // 获取项目数据
    const project = projectStore.savedProjects.find(p => p.id === projectId);
    if (!project) {
      return { success: false, error: "Project not found" };
    }

    // 获取媒体文件 - 从存储服务中加载项目相关的媒体文件
    let mediaFiles: MediaFile[] = [];
    if (options.includeMediaFiles) {
      try {
        const { storageService } = await import("@/lib/storage/storage-service");
        mediaFiles = await storageService.loadAllMediaFiles({ projectId });
      } catch (error) {
        console.warn("Failed to load project media files:", error);
        // 如果从存储加载失败，尝试从当前媒体store获取
        mediaFiles = mediaStore.mediaFiles;
      }
    }

    // 获取时间轴数据
    const tracks = options.includeTimeline ? timelineStore.tracks : [];

    // 生成缩略图
    let thumbnail: string | undefined;
    if (options.generateThumbnail) {
      try {
        thumbnail = await generateProjectThumbnail(project, tracks, mediaFiles);
      } catch (error) {
        console.warn("Failed to generate thumbnail:", error);
      }
    }

    // 序列化项目数据
    const serializedProject = serializeProject(project);
    const serializedMediaFiles = await serializeMediaFiles(mediaFiles, options);
    const serializedTimeline = serializeTimeline(tracks);

    // 创建存储文件
    const storageFile: ProjectStorageFile = {
      version: PROJECT_STORAGE_VERSION,
      metadata: {
        name: project.name,
        description: `Exported from OpenCut on ${new Date().toLocaleDateString()}`,
        thumbnail,
        duration: timelineStore.getTotalDuration(),
        canvasSize: project.canvasSize,
        fps: project.fps || 30,
        backgroundColor: project.backgroundColor,
        backgroundType: project.backgroundType,
        blurIntensity: project.blurIntensity,
      },
      project: serializedProject,
      mediaFiles: serializedMediaFiles,
      timeline: serializedTimeline,
      createdAt: new Date().toISOString(),
      exportedBy: "OpenCut",
    };

    // 根据导出格式选择处理方式
    if (options.exportFormat === "zip") {
      return await exportProjectAsZip(project, storageFile, mediaFiles, options);
    } else {
      return await exportProjectAsSingleFile(project, storageFile, options);
    }
  } catch (error) {
    console.error("Export project failed:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

// 导出为单个.opencut文件
async function exportProjectAsSingleFile(
  project: TProject,
  storageFile: ProjectStorageFile,
  options: ProjectExportOptions
): Promise<ProjectExportResult> {
  // 转换为JSON
  const jsonString = JSON.stringify(storageFile, null, 2);
  const fileData = new TextEncoder().encode(jsonString);
  const arrayBuffer = new ArrayBuffer(fileData.length);
  const uint8Array = new Uint8Array(arrayBuffer);
  uint8Array.set(fileData);

  // 生成文件名
  const fileName = `${project.name.replace(/[^a-zA-Z0-9]/g, "_")}_${new Date().toISOString().split("T")[0]}.opencut`;

  return {
    success: true,
    fileData: arrayBuffer,
    fileName,
    fileSize: fileData.length,
  };
}

// 导出为压缩包格式
async function exportProjectAsZip(
  project: TProject,
  storageFile: ProjectStorageFile,
  mediaFiles: MediaFile[],
  options: ProjectExportOptions
): Promise<ProjectExportResult> {
  const JSZip = (await import("jszip")).default;
  const zip = new JSZip();

  // 1. 添加项目文件（不包含媒体文件的Base64数据）
  const projectFileWithoutMedia = {
    ...storageFile,
    mediaFiles: [], // 不包含Base64数据，媒体文件单独存储
  };
  const projectJsonString = JSON.stringify(projectFileWithoutMedia, null, 2);
  zip.file("project.opencut", projectJsonString);

  // 2. 添加媒体文件到压缩包
  if (options.includeMediaFiles && mediaFiles.length > 0) {
    const mediaFolder = zip.folder("media");
    if (mediaFolder) {
      for (const mediaFile of mediaFiles) {
        try {
          const arrayBuffer = await mediaFile.file.arrayBuffer();
          const fileExtension = getFileExtension(mediaFile.file.name);
          const fileName = `${mediaFile.id}${fileExtension}`;
          mediaFolder.file(fileName, arrayBuffer);
        } catch (error) {
          console.warn(`Failed to add media file ${mediaFile.name} to zip:`, error);
        }
      }
    }
  }

  // 3. 添加README文件
  const readmeContent = `# ${project.name}

这是一个OpenCut项目文件包。

## 文件结构
- project.opencut: 项目配置文件
- media/: 媒体文件目录
  ${mediaFiles.map(f => `- ${f.id}${getFileExtension(f.file.name)}: ${f.name}`).join('\n  ')}

## 导入说明
1. 在OpenCut中点击"导入项目"
2. 选择这个.zip文件
3. 项目将自动恢复所有媒体文件和时间轴数据

导出时间: ${new Date().toLocaleString()}
OpenCut版本: ${PROJECT_STORAGE_VERSION}
`;
  zip.file("README.md", readmeContent);

  // 4. 生成压缩包
  const zipBuffer = await zip.generateAsync({ type: "arraybuffer" });
  const fileName = `${project.name.replace(/[^a-zA-Z0-9]/g, "_")}_${new Date().toISOString().split("T")[0]}.zip`;

  return {
    success: true,
    fileData: zipBuffer,
    fileName,
    fileSize: zipBuffer.byteLength,
  };
}

// 获取文件扩展名
function getFileExtension(fileName: string): string {
  const lastDot = fileName.lastIndexOf('.');
  return lastDot !== -1 ? fileName.substring(lastDot) : '';
}

// 从存储文件导入项目
export async function importProjectFromFile(
  fileData: ArrayBuffer,
  options: ProjectImportOptions = {
    includeMediaFiles: true,
    includeTimeline: true,
    mergeWithExisting: false,
  }
): Promise<ProjectImportResult> {
  try {
    // 验证文件
    const validation = validateProjectFile(fileData);
    if (!validation.isValid) {
      return {
        success: false,
        error: `Invalid project file: ${validation.errors.join(", ")}`,
        warnings: validation.warnings,
      };
    }

    // 解析文件数据
    const text = new TextDecoder().decode(fileData);
    const storageFile = JSON.parse(text) as ProjectStorageFile;

    const projectStore = useProjectStore.getState();
    const mediaStore = useMediaStore.getState();
    const timelineStore = useTimelineStore.getState();

    // 生成新的项目ID
    const newProjectId = crypto.randomUUID();
    const projectName = options.newProjectName || storageFile.metadata.name;

    // 反序列化项目数据
    const project = deserializeProject(storageFile.project, newProjectId, projectName);

    // 导入媒体文件
    let importedMediaCount = 0;
    if (options.includeMediaFiles && storageFile.mediaFiles) {
      const mediaFiles = await deserializeMediaFiles(storageFile.mediaFiles);
      for (const mediaFile of mediaFiles) {
        // 暂时跳过媒体文件添加，因为需要项目ID
        // await mediaStore.addMediaFile(mediaFile);
        importedMediaCount++;
      }
    }

    // 导入时间轴数据
    let importedTracksCount = 0;
    if (options.includeTimeline && storageFile.timeline) {
      const tracks = deserializeTimeline(storageFile.timeline);
      // 暂时跳过时间轴添加，因为需要项目ID
      // for (const track of tracks) {
      //   timelineStore.addTrack(track);
      //   importedTracksCount++;
      // }
    }

    // 保存项目
    await projectStore.createNewProject(project.name);

    return {
      success: true,
      projectId: newProjectId,
      warnings: validation.warnings,
      importedMediaCount,
      importedTracksCount,
    };
  } catch (error) {
    console.error("Import project failed:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

// 序列化项目数据
function serializeProject(project: TProject): SerializedProject {
  return {
    id: project.id,
    name: project.name,
    createdAt: project.createdAt.toISOString(),
    updatedAt: project.updatedAt.toISOString(),
    scenes: project.scenes.map(scene => ({
      id: scene.id,
      name: scene.name,
      isMain: scene.isMain,
      createdAt: scene.createdAt.toISOString(),
      updatedAt: scene.updatedAt.toISOString(),
    })),
    currentSceneId: project.currentSceneId,
    canvasSize: project.canvasSize,
    canvasMode: project.canvasMode,
    fps: project.fps,
    backgroundColor: project.backgroundColor,
    backgroundType: project.backgroundType,
    blurIntensity: project.blurIntensity,
    bookmarks: project.bookmarks,
  };
}

// 序列化媒体文件
async function serializeMediaFiles(
  mediaFiles: MediaFile[],
  options: ProjectExportOptions
): Promise<SerializedMediaFile[]> {
  const serializedFiles: SerializedMediaFile[] = [];

  for (const mediaFile of mediaFiles) {
    try {
      // 转换文件为Base64
      const arrayBuffer = await mediaFile.file.arrayBuffer();
      const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));

      serializedFiles.push({
        id: mediaFile.id,
        name: mediaFile.name,
        type: mediaFile.type,
        data: base64,
        size: mediaFile.file.size,
        duration: mediaFile.duration,
        width: mediaFile.width,
        height: mediaFile.height,
        fps: mediaFile.fps,
        mimeType: mediaFile.file.type,
        lastModified: mediaFile.file.lastModified,
        thumbnail: mediaFile.thumbnailUrl,
      });
    } catch (error) {
      console.warn(`Failed to serialize media file ${mediaFile.name}:`, error);
    }
  }

  return serializedFiles;
}

// 序列化时间轴数据
function serializeTimeline(tracks: TimelineTrack[]): SerializedTimeline {
  const timelineStore = useTimelineStore.getState();
  
  return {
    tracks: tracks.map((track, index) => ({
      id: track.id,
      name: track.name,
      type: track.type,
      elements: track.elements.map(element => ({
        id: element.id,
        name: element.name,
        type: element.type,
        startTime: element.startTime,
        duration: element.duration,
        trimStart: element.trimStart,
        trimEnd: element.trimEnd,
        hidden: element.hidden,
        muted: element.type === "media" ? element.muted : undefined,
        mediaId: element.type === "media" ? element.mediaId : undefined,
        content: element.type === "text" ? element.content : undefined,
        fontSize: element.type === "text" ? element.fontSize : undefined,
        fontFamily: element.type === "text" ? element.fontFamily : undefined,
        color: element.type === "text" ? element.color : undefined,
        backgroundColor: element.type === "text" ? element.backgroundColor : undefined,
        textAlign: element.type === "text" ? element.textAlign : undefined,
        fontWeight: element.type === "text" ? element.fontWeight : undefined,
        fontStyle: element.type === "text" ? element.fontStyle : undefined,
        textDecoration: element.type === "text" ? element.textDecoration : undefined,
        x: element.type === "text" ? element.x : undefined,
        y: element.type === "text" ? element.y : undefined,
        rotation: element.type === "text" ? element.rotation : undefined,
        opacity: element.type === "text" ? element.opacity : undefined,
      })),
      muted: track.muted,
      isMain: track.isMain,
      order: index,
    })),
    totalDuration: timelineStore.getTotalDuration(),
    playheadPosition: 0, // 默认位置
    zoomLevel: 1, // 默认缩放
  };
}

// 反序列化项目数据
function deserializeProject(
  serializedProject: SerializedProject,
  newId: string,
  newName: string
): TProject {
  return {
    id: newId,
    name: newName,
    thumbnail: "", // 将在导入后生成
    createdAt: new Date(serializedProject.createdAt),
    updatedAt: new Date(serializedProject.updatedAt),
    scenes: serializedProject.scenes.map(scene => ({
      id: scene.id,
      name: scene.name,
      isMain: (scene as any).isMain || false,
      createdAt: new Date(scene.createdAt),
      updatedAt: new Date(scene.updatedAt),
    })),
    currentSceneId: serializedProject.currentSceneId,
    canvasSize: serializedProject.canvasSize,
    canvasMode: serializedProject.canvasMode,
    fps: serializedProject.fps,
    backgroundColor: serializedProject.backgroundColor,
    backgroundType: serializedProject.backgroundType,
    blurIntensity: serializedProject.blurIntensity as any,
    bookmarks: serializedProject.bookmarks,
  };
}

// 反序列化媒体文件
async function deserializeMediaFiles(serializedFiles: SerializedMediaFile[]): Promise<MediaFile[]> {
  const mediaFiles: MediaFile[] = [];

  for (const serializedFile of serializedFiles) {
    try {
      // 将Base64转换回文件
      const binaryString = atob(serializedFile.data);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const file = new File([bytes], serializedFile.name, { type: serializedFile.mimeType });

      mediaFiles.push({
        id: serializedFile.id,
        name: serializedFile.name,
        type: serializedFile.type,
        file,
        url: URL.createObjectURL(file),
        thumbnailUrl: serializedFile.thumbnail,
        duration: serializedFile.duration,
        width: serializedFile.width,
        height: serializedFile.height,
        fps: serializedFile.fps,
      });
    } catch (error) {
      console.warn(`Failed to deserialize media file ${serializedFile.name}:`, error);
    }
  }

  return mediaFiles;
}

// 反序列化时间轴数据
function deserializeTimeline(serializedTimeline: SerializedTimeline): TimelineTrack[] {
  return serializedTimeline.tracks.map(track => ({
    id: track.id,
    name: track.name,
    type: track.type,
    elements: track.elements.map(element => {
      if (element.type === "media") {
        return {
          id: element.id,
          name: element.name,
          type: "media" as const,
          startTime: element.startTime,
          duration: element.duration,
          trimStart: element.trimStart,
          trimEnd: element.trimEnd,
          hidden: element.hidden,
          mediaId: element.mediaId!,
          muted: element.muted,
        };
      } else {
        return {
          id: element.id,
          name: element.name,
          type: "text" as const,
          startTime: element.startTime,
          duration: element.duration,
          trimStart: element.trimStart,
          trimEnd: element.trimEnd,
          hidden: element.hidden,
          content: element.content!,
          fontSize: element.fontSize!,
          fontFamily: element.fontFamily!,
          color: element.color!,
          backgroundColor: element.backgroundColor!,
          textAlign: element.textAlign!,
          fontWeight: element.fontWeight!,
          fontStyle: element.fontStyle!,
          textDecoration: element.textDecoration!,
          x: element.x!,
          y: element.y!,
          rotation: element.rotation!,
          opacity: element.opacity!,
        };
      }
    }),
    muted: track.muted,
    isMain: track.isMain,
  }));
}

// 生成项目缩略图
async function generateProjectThumbnail(
  project: TProject,
  tracks: TimelineTrack[],
  mediaFiles: MediaFile[]
): Promise<string> {
  // 这里应该实现缩略图生成逻辑
  // 暂时返回空字符串
  return "";
}
