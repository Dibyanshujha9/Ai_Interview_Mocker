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

export const userAnswer = pgTable("userAnswer", {
	id: serial().primaryKey().notNull(),
	mockId: varchar().notNull(),
	question: varchar().notNull(),
	correctAns: text().notNull(),
	userAns: text("UserAns").notNull(),
	feedback: text().notNull(),
	rating: varchar(),
	userEmail: varchar(),
	createdAt: varchar({ length: 255 }),
});
