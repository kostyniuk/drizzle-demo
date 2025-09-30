import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const instruments = pgTable('instruments', {
  id: serial('id').primaryKey(),
  name: text('name'),
});

type SelectInstrument = typeof instruments.$inferSelect;
type InsertInstrument = typeof instruments.$inferInsert;

export type Instrument = SelectInstrument;
export type NewInstrument = InsertInstrument;