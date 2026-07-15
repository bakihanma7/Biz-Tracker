import { z } from "zod";

export const createServiceSchema = z.object({
  name: z.string().min(2),
  description: z.string().optional(),
  price: z.number().positive(),
});

export const updateServiceSchema =
  createServiceSchema.partial();