import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./utils/schema.js",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_M41wHrQPSkZB@ep-white-butterfly-a8ufbn1n-pooler.eastus2.azure.neon.tech/ai-interview-mocker?sslmode=require",
  },
});
