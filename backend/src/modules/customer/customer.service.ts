import prisma from "../../config/prisma";
import type {
  CreateCustomerDTO,
  UpdateCustomerDTO,
} from "./customer.types";

export async function createCustomer(
  data: CreateCustomerDTO
) {
  return prisma.customer.create({
    data,
  });
}

export async function getAllCustomers() {
  return prisma.customer.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getCustomerById(id: string) {
  return prisma.customer.findUnique({
    where: {
      id,
    },
  });
}

export async function updateCustomer(
  id: string,
  data: UpdateCustomerDTO
) {
  return prisma.customer.update({
    where: {
      id,
    },
    data,
  });
}

export async function deleteCustomer(id: string) {
  return prisma.customer.delete({
    where: {
      id,
    },
  });
}