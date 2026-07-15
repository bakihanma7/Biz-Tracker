import prisma from "../../config/prisma";
import type {
  CreateServiceDTO,
  UpdateServiceDTO,
} from "./service.types";

export async function createService(
  data: CreateServiceDTO
) {
  return prisma.service.create({
    data,
  });
}

export async function getAllServices() {
  return prisma.service.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getServiceById(id: string) {
  return prisma.service.findUnique({
    where: {
      id,
    },
  });
}

export async function updateService(
  id: string,
  data: UpdateServiceDTO
) {
  return prisma.service.update({
    where: {
      id,
    },
    data,
  });
}

export async function deleteService(id: string) {
  return prisma.service.delete({
    where: {
      id,
    },
  });
}