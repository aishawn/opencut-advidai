"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Download, Upload, FileText, AlertCircle, CheckCircle } from "lucide-react";
import { 
  exportProjectToFile, 
  importProjectFromFile, 
  type ProjectExportOptions,
  type ProjectImportOptions 
} from "@/lib/project-storage";
import { useProjectStore } from "@/stores/project-store";
import { useRouter } from "next/navigation";

interface ImportExportDialogProps {
  mode: "import" | "export";
  projectId?: string; // 导出时需要的项目ID
  children: React.ReactNode;
}

export function ImportExportDialog({ mode, projectId, children }: ImportExportDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [warnings, setWarnings] = useState<string[]>([]);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  
  const { activeProject, savedProjects } = useProjectStore();
  
  // 导出选项
  const [exportOptions, setExportOptions] = useState<ProjectExportOptions>({
    includeMediaFiles: true,
    includeTimeline: true,
    compressMediaFiles: false,
    quality: "high",
    generateThumbnail: true,
  });
  
  // 导入选项
  const [importOptions, setImportOptions] = useState<ProjectImportOptions>({
    includeMediaFiles: true,
    includeTimeline: true,
    mergeWithExisting: false,
    newProjectName: "",
  });

  const handleExport = async () => {
    if (!projectId) {
      setError("No project selected for export");
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(null);
    setProgress(0);

    try {
      // 模拟进度更新
      const progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + 10, 90));
      }, 200);

      const result = await exportProjectToFile(projectId, exportOptions);
      
      clearInterval(progressInterval);
      setProgress(100);

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

        setSuccess(`Project exported successfully! File size: ${formatFileSize(result.fileSize || 0)}`);
        setTimeout(() => setIsOpen(false), 2000);
      } else {
        setError(result.error || "Export failed");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Export failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleImport = async () => {
    const fileInput = fileInputRef.current;
    if (!fileInput?.files?.[0]) {
      setError("Please select a file to import");
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(null);
    setWarnings([]);
    setProgress(0);

    try {
      const file = fileInput.files[0];
      const arrayBuffer = await file.arrayBuffer();
      
      // 直接导入ZIP文件
      setProgress(20);

      setProgress(60);

      // 导入项目
      const result = await importProjectFromFile(arrayBuffer, {
        ...importOptions,
        newProjectName: importOptions.newProjectName || file.name.replace('.zip', '')
      });

      setProgress(100);

      if (result.success && result.projectId) {
        setSuccess(`Project imported successfully! ${result.importedMediaCount || 0} media files, ${result.importedTracksCount || 0} tracks imported.`);
        
        // 跳转到新项目
        setTimeout(() => {
          router.push(`/editor/${result.projectId}`);
          setIsOpen(false);
        }, 2000);
      } else {
        setError(result.error || "Import failed");
        setWarnings(result.warnings || []);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Import failed");
    } finally {
      setIsLoading(false);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const resetForm = () => {
    setError(null);
    setSuccess(null);
    setWarnings([]);
    setProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      resetForm();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {mode === "import" ? (
              <>
                <Upload className="h-5 w-5" />
                Import Project
              </>
            ) : (
              <>
                <Download className="h-5 w-5" />
                Export Project
              </>
            )}
          </DialogTitle>
          <DialogDescription>
            {mode === "import" 
              ? "Import a project from a .zip package"
              : "Export your project as a .zip package for backup or sharing"
            }
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {mode === "import" ? (
            <>
              <div className="space-y-2">
                <Label htmlFor="file-input">Project File</Label>
                <Input
                  id="file-input"
                  type="file"
                  accept=".zip"
                  ref={fileInputRef}
                  onChange={() => setError(null)}
                />
                <p className="text-xs text-muted-foreground">
                  Select a .zip project package to import
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="project-name">Project Name</Label>
                <Input
                  id="project-name"
                  placeholder="Enter project name"
                  value={importOptions.newProjectName}
                  onChange={(e) => setImportOptions((prev: ProjectImportOptions) => ({
                    ...prev,
                    newProjectName: e.target.value
                  }))}
                />
              </div>

            </>
          ) : (
            <>
              <div className="space-y-3">
                <Label>Export Options</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="export-media"
                      checked={exportOptions.includeMediaFiles}
                      onCheckedChange={(checked) => setExportOptions((prev: ProjectExportOptions) => ({
                        ...prev,
                        includeMediaFiles: checked as boolean
                      }))}
                    />
                    <Label htmlFor="export-media">Include media files</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="export-timeline"
                      checked={exportOptions.includeTimeline}
                      onCheckedChange={(checked) => setExportOptions((prev: ProjectExportOptions) => ({
                        ...prev,
                        includeTimeline: checked as boolean
                      }))}
                    />
                    <Label htmlFor="export-timeline">Include timeline</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="generate-thumbnail"
                      checked={exportOptions.generateThumbnail}
                      onCheckedChange={(checked) => setExportOptions((prev: ProjectExportOptions) => ({
                        ...prev,
                        generateThumbnail: checked as boolean
                      }))}
                    />
                    <Label htmlFor="generate-thumbnail">Generate thumbnail</Label>
                  </div>
                </div>
              </div>


              <div className="space-y-2">
                <Label htmlFor="quality">Media Quality</Label>
                <Select
                  value={exportOptions.quality}
                  onValueChange={(value: "low" | "medium" | "high") => 
                    setExportOptions((prev: ProjectExportOptions) => ({ ...prev, quality: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low (Smaller file)</SelectItem>
                    <SelectItem value="medium">Medium (Balanced)</SelectItem>
                    <SelectItem value="high">High (Best quality)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          {isLoading && (
            <div className="space-y-2">
              <Progress value={progress} className="w-full" />
              <p className="text-sm text-muted-foreground text-center">
                {mode === "import" ? "Importing project..." : "Exporting project..."} {progress}%
              </p>
            </div>
          )}

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}

          {warnings.length > 0 && (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <div className="space-y-1">
                  <p className="font-medium">Warnings:</p>
                  <ul className="list-disc list-inside space-y-1">
                    {warnings.map((warning, index) => (
                      <li key={index} className="text-sm">{warning}</li>
                    ))}
                  </ul>
                </div>
              </AlertDescription>
            </Alert>
          )}
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setIsOpen(false)}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            onClick={mode === "import" ? handleImport : handleExport}
            disabled={isLoading || (mode === "import" && !fileInputRef.current?.files?.[0])}
          >
            {isLoading ? (
              <>
                <FileText className="h-4 w-4 mr-2 animate-spin" />
                {mode === "import" ? "Importing..." : "Exporting..."}
              </>
            ) : (
              <>
                {mode === "import" ? (
                  <>
                    <Upload className="h-4 w-4 mr-2" />
                    Import
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </>
                )}
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
