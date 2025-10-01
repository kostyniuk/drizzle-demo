import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const instruments = pgTable('instruments', {
  id: serial('id').primaryKey(),
  name: text('name'),
  description: text('description'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
  typeId: integer('type_id').references(() => instrumentTypes.id)
});

export const instrumentTypes = pgTable("instrument_types", {
  id: serial('id').primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
  name: varchar()
});

/**
 * To support both SQL-like joins and the relational queries API in Drizzle, 
 * your schema should include both the foreign key reference (for SQL joins) 
 * and the relations definition (for the relational API).
 */

export const instrumentTypesRelations = relations(instrumentTypes, ({ many }) => ({
  instruments: many(instruments)
}));

export const instrumentRelations = relations(instruments, ({ one }) => ({
  instrumentType: one(instrumentTypes, {
    fields: [instruments.typeId],
    references: [instrumentTypes.id]
  })
}));

