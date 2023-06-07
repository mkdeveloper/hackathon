import { pgTable, integer, varchar, serial } from "drizzle-orm/pg-core";
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";

export const cartTable = pgTable("cart", {
  id: serial("id").primaryKey().notNull(),
  user_id: varchar("user_id", { length: 255 }).notNull(),
  product_id: varchar("product_id", { length: 255 }).notNull(),
  quantity: integer("quantitiy").notNull(),
});

export const db = drizzle(sql);
