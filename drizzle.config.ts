import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config();

if (!process.env.NEON_DATABASE_URL)
    throw new Error("NEON_DATABASE_URL not found in environment");

export default {
    schema: "./app/db/schema.ts",
    out: "./app/db/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.NEON_DATABASE_URL,
 },
    strict: true,
} satisfies Config;