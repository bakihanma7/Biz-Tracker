import { z } from "zod";

export const createCustomerSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().email().optional(),
});

export const updateCustomerSchema =
  createCustomerSchema.partial();