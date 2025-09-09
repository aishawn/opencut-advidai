"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  startVideoExport, 
  waitForExportCompletion, 
  buildExportRequest,
  type ExportRequest 
} from "@/lib/export-client";
import { useProjectStore } from "@/stores/project-store";
import { useTimelineStore } from "@/stores/timeline-store";
import { useMediaStore } from "@/stores/media-store";

export function ExportExample() {
  const [isExporting, setIsExporting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [exportUrl, setExportUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { activeProject } = useProjectStore();
  const { tracks } = useTimelineStore();
  const { mediaFiles } = useMediaStore();

  const handleExport = async () => {
    if (!activeProject) {
      setError("No active project");
      return;
    }

    setIsExporting(true);
    setError(null);
    setProgress(0);

    try {
      // 构建导出请求
      const exportRequest = await buildExportRequest(
        activeProject,
        tracks,
        mediaFiles,
        {
          format: "mp4",
          quality: "high",
          includeAudio: true,
        }
      );

      // 开始导出
      const result = await startVideoExport(exportRequest);
      
      if (!result.success || !result.jobId) {
        throw new Error(result.error || "Failed to start export");
      }

      // 等待导出完成
      const finalResult = await waitForExportCompletion(
        result.jobId,
        (progress) => setProgress(progress)
      );

      if (finalResult.success && finalResult.videoUrl) {
        setExportUrl(finalResult.videoUrl);
      } else {
        throw new Error(finalResult.error || "Export failed");
      }

    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="space-y-4">
      <Button 
        onClick={handleExport} 
        disabled={isExporting || !activeProject}
        className="w-full"
      >
        {isExporting ? "Exporting..." : "Export Video"}
      </Button>

      {isExporting && (
        <div className="space-y-2">
          <Progress value={progress} className="w-full" />
          <p className="text-sm text-muted-foreground">
            Exporting... {Math.round(progress)}%
          </p>
        </div>
      )}

      {error && (
        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-md">
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      {exportUrl && (
        <div className="space-y-2">
          <p className="text-sm text-green-600">Export completed!</p>
          <video 
            src={exportUrl} 
            controls 
            className="w-full max-w-md mx-auto"
          />
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.open(exportUrl, "_blank")}
          >
            Download Video
          </Button>
        </div>
      )}
    </div>
  );
}
