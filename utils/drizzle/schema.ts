import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const instruments = pgTable('instruments', {
  id: serial('id').primaryKey(),
  name: text('name'),
  description: text('description'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

type SelectInstrument = typeof instruments.$inferSelect;
type InsertInstrument = typeof instruments.$inferInsert;

export type Instrument = SelectInstrument;
export type NewInstrument = InsertInstrument;