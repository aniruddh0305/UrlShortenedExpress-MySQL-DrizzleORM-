import { z } from "zod";

const portSchema = z.coerce.number().min(1).max(65535).default(3001);
const databaseUrlSchema = z.string().min(1);
export const PORT = portSchema.parse(process.env.PORT);

export const DATABASE_URL = databaseUrlSchema.parse(process.env.DATABASE_URL);
