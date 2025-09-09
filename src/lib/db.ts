import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { env } from "@/env";

// Define the export_waitlist table
export const exportWaitlist = pgTable("export_waitlist", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

// Create a lazy database instance that only initializes when accessed
let _db: ReturnType<typeof drizzle> | null = null;

function getDb() {
  if (!_db) {
    const client = postgres(env.DATABASE_URL);
    _db = drizzle(client, { schema: { exportWaitlist } });
  }
  return _db;
}

// Export a proxy that forwards all calls to the actual db instance
export const db = getDb();

// Re-export drizzle-orm functions to ensure version consistency
export {
  eq,
  and,
  or,
  not,
  isNull,
  isNotNull,
  inArray,
  notInArray,
  exists,
  notExists,
  sql,
} from "drizzle-orm";
