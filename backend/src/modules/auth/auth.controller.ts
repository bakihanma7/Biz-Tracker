import { Request, Response } from "express";

import {
  registerUser,
  loginUser,
} from "./auth.service";

export async function register(
  req: Request,
  res: Response
) {
  try {
    const user = await registerUser(req.body ?? {});

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Registration failed",
    });
  }
}

export async function login(
  req: Request,
  res: Response
) {
  try {
    const result = await loginUser(req.body ?? {});

    res.json({
      success: true,
      message: "Login successful",
      data: result,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Login failed",
    });
  }
}