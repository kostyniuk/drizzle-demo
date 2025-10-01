import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { runMigrationsOnce } from './migrate'

const connectionString = process.env.DATABASE_URL as string

console.log('Connecting to database...')

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(connectionString, { prepare: false })
const db = drizzle(client)

// Run migrations synchronously at module load; throw to block server start on failure
await runMigrationsOnce(db)

export default db;