import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle/migration", // it will reflect the drizzle folder migration will save at this path
  schema: "./drizzle/schema.js", // here give the path of file where we created the table
  dialect: "mysql",
  dbCredentials: {
    url: process.env.DATABASE_URL, //Db name is defined here
  },
});
