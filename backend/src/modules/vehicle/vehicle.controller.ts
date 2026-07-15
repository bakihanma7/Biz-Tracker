import type { Request, Response } from "express";

import {
  createVehicle,
  getAllVehicles,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
} from "./vehicle.service";

export async function create(
  req: Request,
  res: Response
) {
  try {
    const vehicle = await createVehicle(req.body);

    return res.status(201).json({
      success: true,
      data: vehicle,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Unable to create vehicle",
    });
  }
}

export async function getAll(
  req: Request,
  res: Response
) {
  try {
    const vehicles = await getAllVehicles();

    return res.json({
      success: true,
      data: vehicles,
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Unable to fetch vehicles",
    });
  }
}

export async function getOne(
  req: Request,
  res: Response
) {
  try {
    const vehicle = await getVehicleById(
      String(req.params.id)
    );

    if (!vehicle) {
      return res.status(404).json({
        success: false,
        message: "Vehicle not found",
      });
    }

    return res.json({
      success: true,
      data: vehicle,
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Unable to fetch vehicle",
    });
  }
}

export async function update(
  req: Request,
  res: Response
) {
  try {
    const vehicle = await updateVehicle(
      String(req.params.id),
      req.body
    );

    return res.json({
      success: true,
      data: vehicle,
    });
  } catch {
    return res.status(400).json({
      success: false,
      message: "Unable to update vehicle",
    });
  }
}

export async function remove(
  req: Request,
  res: Response
) {
  try {
    await deleteVehicle(String(req.params.id));

    return res.json({
      success: true,
      message: "Vehicle deleted successfully",
    });
  } catch {
    return res.status(400).json({
      success: false,
      message: "Unable to delete vehicle",
    });
  }
}