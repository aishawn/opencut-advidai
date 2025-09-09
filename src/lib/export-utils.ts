import { env } from "@/env";

// 导出任务状态类型
export type ExportJobStatus = {
  success: boolean;
  status: "pending" | "processing" | "completed" | "failed";
  videoUrl?: string;
  error?: string;
  progress?: number;
};

// R2配置检查函数
export function isR2Configured() {
  const missingVars = [];

  if (!env.CLOUDFLARE_ACCOUNT_ID) missingVars.push("CLOUDFLARE_ACCOUNT_ID");
  if (!env.R2_ACCESS_KEY_ID) missingVars.push("R2_ACCESS_KEY_ID");
  if (!env.R2_SECRET_ACCESS_KEY) missingVars.push("R2_SECRET_ACCESS_KEY");
  if (!env.R2_BUCKET_NAME) missingVars.push("R2_BUCKET_NAME");

  return { configured: missingVars.length === 0, missingVars };
}

// 内存存储导出任务状态 (生产环境应该使用 Redis 或数据库)
const exportJobs = new Map<string, ExportJobStatus>();

// 更新导出任务状态
export async function updateExportJobStatus(jobId: string, status: ExportJobStatus) {
  exportJobs.set(jobId, status);
  console.log(`Export job ${jobId} status:`, status);
}

// 获取导出任务状态
export async function getExportJobStatus(jobId: string): Promise<ExportJobStatus> {
  return exportJobs.get(jobId) || {
    success: true,
    status: "pending",
    progress: 0,
  };
}

// 清理过期的导出任务 (可选)
export function cleanupExpiredJobs() {
  // 这里可以实现清理逻辑，删除超过一定时间的任务
  console.log("Cleaning up expired export jobs...");
}
