"use client";

import { Download, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ImportExportDialog } from "./import-export-dialog";

interface ProjectActionsProps {
  projectId?: string; // 用于导出
  onImportComplete?: () => void;
  children?: React.ReactNode; // 支持children
}

export function ProjectActions({ projectId, onImportComplete, children }: ProjectActionsProps) {
  return (
    <div className="flex items-center gap-2">
      {/* 导入按钮 */}
      <ImportExportDialog mode="import" onImportComplete={onImportComplete}>
        <Button variant="outline" size="sm">
          <Upload className="h-4 w-4 mr-2" />
          Import
        </Button>
      </ImportExportDialog>

      {/* 导出按钮 */}
      {projectId && (
        <ImportExportDialog mode="export" projectId={projectId}>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </ImportExportDialog>
      )}

      {/* 自定义children */}
      {children}
    </div>
  );
}
