import { migrate } from 'drizzle-orm/postgres-js/migrator'
import { sql } from 'drizzle-orm'

let hasRun = false

export async function runMigrationsOnce(db: any): Promise<void> {
  if (hasRun) return
  hasRun = true

  console.log('Running migrations...')
  // Ensure the connection works before attempting migrations
  await db.execute(sql`select 1`)

  // Run migrations from the compiled SQL files in ./drizzle
  await migrate(db, { migrationsFolder: './drizzle' })
}


