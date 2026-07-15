import prisma from "../../config/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import type {
  RegisterUserDTO,
  LoginUserDTO,
} from "./auth.types";

export async function registerUser(data: RegisterUserDTO) {
  if (!data || typeof data !== "object") {
    throw new Error("Name, email and password are required");
  }

  if (!data.name || !data.email || !data.password) {
    throw new Error("Name, email and password are required");
  }

  // Check if the email already exists
  const existingUser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(data.password, 10);

  // Create the user
  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: "EMPLOYEE",
    },
  });

  return user;
}

export async function loginUser(data: LoginUserDTO) {
  if (!data || typeof data !== "object") {
    throw new Error("Email and password are required");
  }

  if (!data.email || !data.password) {
    throw new Error("Email and password are required");
  }

  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Compare passwords
  const passwordMatch = await bcrypt.compare(
    data.password,
    user.password
  );

  if (!passwordMatch) {
    throw new Error("Invalid email or password");
  }

  // Create JWT
  const token = jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: "7d",
    }
  );

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    }
  };
}