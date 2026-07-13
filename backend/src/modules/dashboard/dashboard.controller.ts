import { Request, Response } from "express";
import { getDashboardData } from "./dashboard.service";

export function getDashboard(
  req: Request,
  res: Response,
) {
  res.json(getDashboardData());
}