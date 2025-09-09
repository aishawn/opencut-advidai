import { vercel } from "@t3-oss/env-core/presets-zod";
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  extends: [vercel()],
  server: {
    ANALYZE: z.string().optional(),
    // Added by Vercel
    NEXT_RUNTIME: z.enum(["nodejs", "edge"]).optional(),
    NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development"),
    // Database
    DATABASE_URL: z
      .string()
      .startsWith("postgres://")
      .or(z.string().startsWith("postgresql://")),
    // Auth
    BETTER_AUTH_SECRET: z.string(),
    UPSTASH_REDIS_REST_URL: z.string().url(),
    UPSTASH_REDIS_REST_TOKEN: z.string(),
    GOOGLE_CLIENT_ID: z.string().optional(),
    GOOGLE_CLIENT_SECRET: z.string().optional(),
    // External APIs
    FREESOUND_CLIENT_ID: z.string(),
    FREESOUND_API_KEY: z.string(),
    // R2 / Cloudflare
    CLOUDFLARE_ACCOUNT_ID: z.string(),
    R2_ACCESS_KEY_ID: z.string(),
    R2_SECRET_ACCESS_KEY: z.string(),
    R2_BUCKET_NAME: z.string(),
    // Modal transcription
    MODAL_TRANSCRIPTION_URL: z.string(),
  },
  client: {
    NEXT_PUBLIC_BETTER_AUTH_URL: z.string().url(),
  },
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    NEXT_RUNTIME: process.env.NEXT_RUNTIME,
    NODE_ENV: process.env.NODE_ENV,
    // Database
    DATABASE_URL: process.env.DATABASE_URL,
    // Auth
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
    NEXT_PUBLIC_BETTER_AUTH_URL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    // External APIs
    FREESOUND_CLIENT_ID: process.env.FREESOUND_CLIENT_ID,
    FREESOUND_API_KEY: process.env.FREESOUND_API_KEY,
    // R2 / Cloudflare
    CLOUDFLARE_ACCOUNT_ID: process.env.CLOUDFLARE_ACCOUNT_ID,
    R2_ACCESS_KEY_ID: process.env.R2_ACCESS_KEY_ID,
    R2_SECRET_ACCESS_KEY: process.env.R2_SECRET_ACCESS_KEY,
    R2_BUCKET_NAME: process.env.R2_BUCKET_NAME,
    // Modal transcription
    MODAL_TRANSCRIPTION_URL: process.env.MODAL_TRANSCRIPTION_URL,
  },
});
