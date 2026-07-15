import prisma from "../../config/prisma";
import type {
  CreateVehicleDTO,
  UpdateVehicleDTO,
} from "./vehicle.types";

export async function createVehicle(
  data: CreateVehicleDTO
) {
  return prisma.vehicle.create({
    data,
    include: {
      customer: true,
    },
  });
}

export async function getAllVehicles() {
  return prisma.vehicle.findMany({
    include: {
      customer: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getVehicleById(id: string) {
  return prisma.vehicle.findUnique({
    where: {
      id,
    },
    include: {
      customer: true,
    },
  });
}

export async function updateVehicle(
  id: string,
  data: UpdateVehicleDTO
) {
  return prisma.vehicle.update({
    where: {
      id,
    },
    data,
    include: {
      customer: true,
    },
  });
}

export async function deleteVehicle(id: string) {
  return prisma.vehicle.delete({
    where: {
      id,
    },
  });
}