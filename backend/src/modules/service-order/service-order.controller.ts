import type { Request, Response } from "express";

import {
  createOrder,
  getOrders,
  getOrder,
  updateOrder,
  deleteOrder,
} from "./service-order.service";

export async function create(
  req: Request,
  res: Response
) {
  try {
    const order = await createOrder(req.body);

    return res.status(201).json({
      success: true,
      data: order,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Unable to create service order",
    });
  }
}

export async function getAll(
  req: Request,
  res: Response
) {
  try {
    const orders = await getOrders();

    return res.json({
      success: true,
      data: orders,
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Unable to fetch service orders",
    });
  }
}

export async function getOne(
  req: Request,
  res: Response
) {
  try {
    const order = await getOrder(
      String(req.params.id)
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Service order not found",
      });
    }

    return res.json({
      success: true,
      data: order,
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Unable to fetch service order",
    });
  }
}

export async function update(
  req: Request,
  res: Response
) {
  try {
    const order = await updateOrder(
      String(req.params.id),
      req.body
    );

    return res.json({
      success: true,
      data: order,
    });
  } catch {
    return res.status(400).json({
      success: false,
      message: "Unable to update service order",
    });
  }
}

export async function remove(
  req: Request,
  res: Response
) {
  try {
    await deleteOrder(String(req.params.id));

    return res.json({
      success: true,
      message: "Service order deleted successfully",
    });
  } catch {
    return res.status(400).json({
      success: false,
      message: "Unable to delete service order",
    });
  }
}