import prisma from "../../config/prisma";

import type {
  CreateServiceOrderDTO,
  UpdateServiceOrderDTO,
} from "./service-order.types";

export async function createOrder(
  data: CreateServiceOrderDTO
) {
  return prisma.serviceOrder.create({
    data,
    include: {
      customer: true,
      vehicle: true,
      service: true,
    },
  });
}

export async function getOrders() {
  return prisma.serviceOrder.findMany({
    include: {
      customer: true,
      vehicle: true,
      service: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getOrder(id: string) {
  return prisma.serviceOrder.findUnique({
    where: { id },
    include: {
      customer: true,
      vehicle: true,
      service: true,
    },
  });
}

export async function updateOrder(
  id: string,
  data: UpdateServiceOrderDTO
) {
  return prisma.serviceOrder.update({
    where: { id },
    data,
    include: {
      customer: true,
      vehicle: true,
      service: true,
    },
  });
}

export async function deleteOrder(id: string) {
  return prisma.serviceOrder.delete({
    where: { id },
  });
}