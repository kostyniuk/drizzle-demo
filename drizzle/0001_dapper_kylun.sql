-- ALTER TABLE "instruments" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint TODO: Bug with this migration, can't convert to serial
ALTER TABLE "instruments" ALTER COLUMN "id" DROP IDENTITY;--> statement-breakpoint
ALTER TABLE "instruments" ALTER COLUMN "created_at" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "instruments" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "instruments" ALTER COLUMN "name" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "instruments" ADD COLUMN "description" text;--> statement-breakpoint
ALTER TABLE "instruments" ADD COLUMN "updated_at" timestamp DEFAULT now();