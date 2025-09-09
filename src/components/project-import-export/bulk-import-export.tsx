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
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Download, 
  Upload, 
  FileText, 
  AlertCircle, 
  CheckCircle,
  Archive,
  FolderOpen
} from "lucide-react";
import { 
  exportProjectToFile, 
  importProjectFromFile, 
  validateProjectFile,
  type ProjectExportOptions,
  type ProjectImportOptions 
} from "@/lib/project-storage";
import { useProjectStore } from "@/stores/project-store";
import { useRouter } from "next/navigation";

interface BulkImportExportProps {
  selectedProjects: string[];
  onComplete?: () => void;
  children: React.ReactNode;
}

export function BulkImportExport({ selectedProjects, onComplete, children }: BulkImportExportProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"import" | "export">("export");
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTask, setCurrentTask] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [results, setResults] = useState<Array<{
    projectId: string;
    projectName: string;
    success: boolean;
    error?: string;
  }>>([]);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  
  const { savedProjects } = useProjectStore();
  
  // 导出选项
  const [exportOptions, setExportOptions] = useState<ProjectExportOptions>({
    includeMediaFiles: true,
    includeTimeline: true,
    compressMediaFiles: true,
    quality: "medium",
    generateThumbnail: true,
  });
  
  // 导入选项
  const [importOptions, setImportOptions] = useState<ProjectImportOptions>({
    includeMediaFiles: true,
    includeTimeline: true,
    mergeWithExisting: false,
    newProjectName: "",
  });

  const handleBulkExport = async () => {
    if (selectedProjects.length === 0) {
      setError("No projects selected for export");
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(null);
    setResults([]);
    setProgress(0);

    try {
      const results: Array<{
        projectId: string;
        projectName: string;
        success: boolean;
        error?: string;
      }> = [];

      for (let i = 0; i < selectedProjects.length; i++) {
        const projectId = selectedProjects[i];
        const project = savedProjects.find(p => p.id === projectId);
        
        if (!project) {
          results.push({
            projectId,
            projectName: "Unknown",
            success: false,
            error: "Project not found"
          });
          continue;
        }

        setCurrentTask(`Exporting ${project.name}...`);
        setProgress((i / selectedProjects.length) * 100);

        try {
          const result = await exportProjectToFile(projectId, exportOptions);
          
          if (result.success && result.fileData) {
            // 下载文件
            const blob = new Blob([result.fileData], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = result.fileName || `${project.name}.opencut`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            results.push({
              projectId,
              projectName: project.name,
              success: true
            });
          } else {
            results.push({
              projectId,
              projectName: project.name,
              success: false,
              error: result.error || "Export failed"
            });
          }
        } catch (err) {
          results.push({
            projectId,
            projectName: project.name,
            success: false,
            error: err instanceof Error ? err.message : "Unknown error"
          });
        }
      }

      setResults(results);
      setProgress(100);
      setCurrentTask("Export completed");

      const successCount = results.filter(r => r.success).length;
      setSuccess(`Bulk export completed! ${successCount}/${selectedProjects.length} projects exported successfully.`);

    } catch (err) {
      setError(err instanceof Error ? err.message : "Bulk export failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBulkImport = async () => {
    const fileInput = fileInputRef.current;
    if (!fileInput?.files?.length) {
      setError("Please select files to import");
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(null);
    setResults([]);
    setProgress(0);

    try {
      const files = Array.from(fileInput.files);
      const results: Array<{
        projectId: string;
        projectName: string;
        success: boolean;
        error?: string;
      }> = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        setCurrentTask(`Importing ${file.name}...`);
        setProgress((i / files.length) * 100);

        try {
          const arrayBuffer = await file.arrayBuffer();
          
          // 验证文件
          const validation = validateProjectFile(arrayBuffer);
          if (!validation.isValid) {
            results.push({
              projectId: "",
              projectName: file.name,
              success: false,
              error: `Invalid file: ${validation.errors.join(", ")}`
            });
            continue;
          }

          // 导入项目
          const result = await importProjectFromFile(arrayBuffer, {
            ...importOptions,
            newProjectName: importOptions.newProjectName || validation.metadata?.name || file.name.replace('.opencut', '')
          });

          results.push({
            projectId: result.projectId || "",
            projectName: validation.metadata?.name || file.name,
            success: result.success,
            error: result.error
          });

          if (result.success && result.projectId) {
            // 跳转到第一个成功导入的项目
            if (i === 0) {
              setTimeout(() => {
                router.push(`/editor/${result.projectId}`);
              }, 1000);
            }
          }

        } catch (err) {
          results.push({
            projectId: "",
            projectName: file.name,
            success: false,
            error: err instanceof Error ? err.message : "Import failed"
          });
        }
      }

      setResults(results);
      setProgress(100);
      setCurrentTask("Import completed");

      const successCount = results.filter(r => r.success).length;
      setSuccess(`Bulk import completed! ${successCount}/${files.length} projects imported successfully.`);

      if (onComplete) {
        onComplete();
      }

    } catch (err) {
      setError(err instanceof Error ? err.message : "Bulk import failed");
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
    setResults([]);
    setProgress(0);
    setCurrentTask("");
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
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {mode === "import" ? (
              <>
                <Upload className="h-5 w-5" />
                Bulk Import Projects
              </>
            ) : (
              <>
                <Download className="h-5 w-5" />
                Bulk Export Projects
              </>
            )}
          </DialogTitle>
          <DialogDescription>
            {mode === "import" 
              ? `Import multiple projects from .opencut files (${selectedProjects.length} selected)`
              : `Export ${selectedProjects.length} selected projects to .opencut files`
            }
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* 模式切换 */}
          <div className="flex gap-2">
            <Button
              variant={mode === "export" ? "default" : "outline"}
              size="sm"
              onClick={() => setMode("export")}
              disabled={isLoading || selectedProjects.length === 0}
            >
              <Download className="h-4 w-4 mr-2" />
              Export ({selectedProjects.length})
            </Button>
            <Button
              variant={mode === "import" ? "default" : "outline"}
              size="sm"
              onClick={() => setMode("import")}
              disabled={isLoading}
            >
              <Upload className="h-4 w-4 mr-2" />
              Import
            </Button>
          </div>

          {mode === "import" ? (
            <>
              <div className="space-y-2">
                <Label htmlFor="bulk-file-input">Project Files</Label>
                <Input
                  id="bulk-file-input"
                  type="file"
                  accept=".opencut"
                  multiple
                  ref={fileInputRef}
                  onChange={() => setError(null)}
                />
                <p className="text-xs text-muted-foreground">
                  Select multiple .opencut project files to import
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bulk-project-name">Default Project Name</Label>
                <Input
                  id="bulk-project-name"
                  placeholder="Enter default project name prefix"
                  value={importOptions.newProjectName}
                  onChange={(e) => setImportOptions(prev => ({
                    ...prev,
                    newProjectName: e.target.value
                  }))}
                />
              </div>

              <div className="space-y-3">
                <Label>Import Options</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="bulk-include-media"
                      checked={importOptions.includeMediaFiles}
                      onCheckedChange={(checked) => setImportOptions(prev => ({
                        ...prev,
                        includeMediaFiles: checked as boolean
                      }))}
                    />
                    <Label htmlFor="bulk-include-media">Include media files</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="bulk-include-timeline"
                      checked={importOptions.includeTimeline}
                      onCheckedChange={(checked) => setImportOptions(prev => ({
                        ...prev,
                        includeTimeline: checked as boolean
                      }))}
                    />
                    <Label htmlFor="bulk-include-timeline">Include timeline</Label>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-3">
                <Label>Export Options</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="bulk-export-media"
                      checked={exportOptions.includeMediaFiles}
                      onCheckedChange={(checked) => setExportOptions(prev => ({
                        ...prev,
                        includeMediaFiles: checked as boolean
                      }))}
                    />
                    <Label htmlFor="bulk-export-media">Include media files</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="bulk-export-timeline"
                      checked={exportOptions.includeTimeline}
                      onCheckedChange={(checked) => setExportOptions(prev => ({
                        ...prev,
                        includeTimeline: checked as boolean
                      }))}
                    />
                    <Label htmlFor="bulk-export-timeline">Include timeline</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="bulk-generate-thumbnail"
                      checked={exportOptions.generateThumbnail}
                      onCheckedChange={(checked) => setExportOptions(prev => ({
                        ...prev,
                        generateThumbnail: checked as boolean
                      }))}
                    />
                    <Label htmlFor="bulk-generate-thumbnail">Generate thumbnails</Label>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm font-medium mb-2">Selected Projects:</p>
                <div className="space-y-1 max-h-32 overflow-y-auto">
                  {selectedProjects.map(projectId => {
                    const project = savedProjects.find(p => p.id === projectId);
                    return (
                      <div key={projectId} className="text-xs text-muted-foreground">
                        • {project?.name || "Unknown Project"}
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {isLoading && (
            <div className="space-y-2">
              <Progress value={progress} className="w-full" />
              <p className="text-sm text-muted-foreground text-center">
                {currentTask} {Math.round(progress)}%
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

          {results.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium">Results:</p>
              <div className="max-h-32 overflow-y-auto space-y-1">
                {results.map((result, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs">
                    {result.success ? (
                      <CheckCircle className="h-3 w-3 text-green-500" />
                    ) : (
                      <AlertCircle className="h-3 w-3 text-red-500" />
                    )}
                    <span className={result.success ? "text-green-700" : "text-red-700"}>
                      {result.projectName}
                    </span>
                    {result.error && (
                      <span className="text-muted-foreground">- {result.error}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
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
            onClick={mode === "import" ? handleBulkImport : handleBulkExport}
            disabled={isLoading || (mode === "import" && !fileInputRef.current?.files?.length) || (mode === "export" && selectedProjects.length === 0)}
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
                    Import Projects
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4 mr-2" />
                    Export Projects
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
