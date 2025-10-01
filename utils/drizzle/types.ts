import { instruments } from "./schema";

type SelectInstrument = typeof instruments.$inferSelect;
type InsertInstrument = typeof instruments.$inferInsert;

export type Instrument = SelectInstrument;
export type NewInstrument = InsertInstrument;   