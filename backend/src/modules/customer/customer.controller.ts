import type { Request, Response } from "express";

import {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} from "./customer.service";

export async function create(
  req: Request,
  res: Response
) {
  try {
    const customer = await createCustomer(req.body);

    return res.status(201).json({
      success: true,
      data: customer,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Unable to create customer",
    });
  }
}

export async function getAll(
  req: Request,
  res: Response
) {
  try {
    const customers = await getAllCustomers();

    return res.json({
      success: true,
      data: customers,
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Unable to fetch customers",
    });
  }
}

export async function getOne(
  req: Request,
  res: Response
) {
  try {
    const customer = await getCustomerById(String(req.params.id));

    if (!customer) {
      return res.status(404).json({
        success: false,
        message: "Customer not found",
      });
    }

    return res.json({
      success: true,
      data: customer,
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Unable to fetch customer",
    });
  }
}

export async function update(
  req: Request,
  res: Response
) {
  try {
    const customer = await updateCustomer(
      String(req.params.id),
      req.body
    );

    return res.json({
      success: true,
      data: customer,
    });
  } catch {
    return res.status(400).json({
      success: false,
      message: "Unable to update customer",
    });
  }
}

export async function remove(
  req: Request,
  res: Response
) {
  try {
    await deleteCustomer(String(req.params.id));

    return res.json({
      success: true,
      message: "Customer deleted successfully",
    });
  } catch {
    return res.status(400).json({
      success: false,
      message: "Unable to delete customer",
    });
  }
}