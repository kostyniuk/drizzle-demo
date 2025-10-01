import { migrate } from 'drizzle-orm/postgres-js/migrator'
import { sql } from 'drizzle-orm'
import db from './db'

let hasRun = false

export async function runMigrationsOnce(): Promise<void> {
  if (hasRun) return
  hasRun = true

  // Ensure the connection works before attempting migrations
  await db.execute(sql`select 1`)

  // Run migrations from the compiled SQL files in ./drizzle
  await migrate(db, { migrationsFolder: './drizzle' })
}


