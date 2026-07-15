import { z } from "zod";

export const createVehicleSchema = z.object({
  plateNumber: z.string().min(3),
  make: z.string().min(2),
  model: z.string().min(1),
  year: z.number().min(1900).max(new Date().getFullYear() + 1),
  color: z.string().optional(),
  customerId: z.string(),
});

export const updateVehicleSchema =
  createVehicleSchema.partial();