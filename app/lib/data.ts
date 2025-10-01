'use server'

import { instruments } from "@/utils/drizzle/schema"
import db from "@/utils/drizzle/db"
import { revalidatePath } from 'next/cache'
import { sql } from "drizzle-orm"
import { Instrument } from "@/utils/drizzle/types"

// List all instruments
export const listInstruments = async () => {
  const allInstruments = await db.query.instruments.findMany({
    with: {
      instrumentType: true
    }
  })
  return allInstruments;
}

export const createInstrument = async (instrument: { name: string }) : Promise<Instrument> => {
  const newInstruments = await db.insert(instruments).values(instrument).returning();
  console.log(newInstruments);
  revalidatePath('/instruments')
  return newInstruments[0];
}

export const createInstrumentTx = async (instrument: { name: string }) : Promise<Instrument> => {
    let newInstrument: Instrument | undefined;
    try {
        await db.transaction(async (tx) => {
            const nonExistingTable = 'error_table';
            const result = await tx.insert(instruments).values(instrument).returning();
            newInstrument = result[0] as Instrument;
            await db.execute(sql`SELECT 1 from ${nonExistingTable};`);
        })
    } catch (error) {
        console.log(error)
    }
    revalidatePath('/instruments')
    return newInstrument as Instrument;
  }