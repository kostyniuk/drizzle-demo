CREATE TABLE "instrument_types" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"name" varchar
);
--> statement-breakpoint
ALTER TABLE "instruments" ADD COLUMN "type_id" integer;--> statement-breakpoint
ALTER TABLE "instruments" ADD CONSTRAINT "instruments_type_id_instrument_types_id_fk" FOREIGN KEY ("type_id") REFERENCES "public"."instrument_types"("id") ON DELETE no action ON UPDATE no action;