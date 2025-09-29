'use server'

import { instruments } from "@/utils/drizzle/schema"
import db from "@/utils/drizzle/db"
import { revalidatePath } from 'next/cache'

// List all instruments
export const listInstruments = async () => {
  const allInstruments = await db.select().from(instruments)
  return allInstruments;
}

export const createInstrument = async (instrument: { name: string }) => {
  const newInstrument = await db.insert(instruments).values(instrument)
  revalidatePath('/instruments')
  return newInstrument
}