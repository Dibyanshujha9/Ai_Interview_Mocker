import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const mockInterview = pgTable("mockInterview", {
	id: serial().primaryKey().notNull(),
	jsonMockResp: text().notNull(),
	jobPosition: varchar({ length: 255 }).notNull(),
	jobDesc: varchar({ length: 255 }).notNull(),
	jobExperience: varchar({ length: 255 }).notNull(),
	createdBy: varchar({ length: 255 }).notNull(),
	createdAt: varchar({ length: 255 }),
	mockId: varchar({ length: 255 }).notNull(),
});
