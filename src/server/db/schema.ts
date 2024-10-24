// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { index, pgTableCreator, serial, varchar } from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `retroweb_${name}`);

export const games = createTable("game", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  slug: varchar("slug", { length: 256 }),
  storage_url: varchar("storage_url", { length: 256 }),
  platform: varchar("platform", { length: 256 }),
});
