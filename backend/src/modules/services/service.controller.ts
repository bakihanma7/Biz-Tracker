import type { Request, Response } from "express";

import {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
} from "./service.service";

export async function create(
  req: Request,
  res: Response
) {
  try {
    const service = await createService(req.body);

    return res.status(201).json({
      success: true,
      data: service,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Unable to create service",
    });
  }
}

export async function getAll(
  req: Request,
  res: Response
) {
  try {
    const services = await getAllServices();

    return res.json({
      success: true,
      data: services,
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Unable to fetch services",
    });
  }
}

export async function getOne(
  req: Request,
  res: Response
) {
  try {
    const service = await getServiceById(
      String(req.params.id)
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    return res.json({
      success: true,
      data: service,
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Unable to fetch service",
    });
  }
}

export async function update(
  req: Request,
  res: Response
) {
  try {
    const service = await updateService(
      String(req.params.id),
      req.body
    );

    return res.json({
      success: true,
      data: service,
    });
  } catch {
    return res.status(400).json({
      success: false,
      message: "Unable to update service",
    });
  }
}

export async function remove(
  req: Request,
  res: Response
) {
  try {
    await deleteService(String(req.params.id));

    return res.json({
      success: true,
      message: "Service deleted successfully",
    });
  } catch {
    return res.status(400).json({
      success: false,
      message: "Unable to delete service",
    });
  }
}