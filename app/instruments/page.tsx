import { createClient } from '@/utils/supabase/server';
import db from '@/utils/drizzle/db';
import { instruments } from '@/utils/drizzle/schema';
import { eq } from 'drizzle-orm';

export default async function Instruments() {
  const allInstruments = await db.select().from(instruments).where(eq(instruments.id, 1));

  return <pre>{JSON.stringify(allInstruments, null, 2)}</pre>
}