import { z } from "zod";

export const createServiceOrderSchema = z.object({
  customerId: z.string(),
  vehicleId: z.string(),
  serviceId: z.string(),
  total: z.number().positive(),
});

export const updateServiceOrderSchema = z.object({
  status: z
    .enum([
      "PENDING",
      "IN_PROGRESS",
      "COMPLETED",
      "CANCELLED",
    ])
    .optional(),

  total: z.number().positive().optional(),
});