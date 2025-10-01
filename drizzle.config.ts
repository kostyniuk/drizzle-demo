import * as dotenv from "dotenv";
import type { Config } from 'drizzle-kit';

// Necessary for Drizzle CLI tooling to work because it runs outside of the Next.js server environment
dotenv.config({ path: ".env.local" }); 

export default {
  schema: './utils/drizzle/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  // optional quality-of-life flags
  strict: true,
  verbose: true,
} satisfies Config;


