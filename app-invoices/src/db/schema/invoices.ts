import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";

export const orders = pgTable("tables", {
  id: text().primaryKey(),
  orderId: text().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
});
