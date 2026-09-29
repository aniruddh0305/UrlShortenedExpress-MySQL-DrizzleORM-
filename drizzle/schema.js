import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const shortenedLinksTable = mysqlTable("shortened_links", {
  id: int().primaryKey().autoincrement(),
  shortCode : varchar({ length: 20 }).notNull().unique(),
  url: varchar({ length: 255 }).notNull(),
});
