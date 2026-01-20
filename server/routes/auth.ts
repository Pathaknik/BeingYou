import { RequestHandler } from "express";
import { AuthResponse, LoginRequest, RegisterRequest } from "@shared/api";

// In-memory user storage (in production, use a database)
const users: Map<
  string,
  {
    id: string;
    email: string;
    name: string;
    password: string;
  }
> = new Map();

export const handleLogin: RequestHandler<
  unknown,
  AuthResponse,
  LoginRequest
> = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  const user = Array.from(users.values()).find((u) => u.email === email);

  if (!user || user.password !== password) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  res.json({
    success: true,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
    },
  });
};

export const handleRegister: RequestHandler<
  unknown,
  AuthResponse,
  RegisterRequest
> = (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({
      success: false,
      message: "Email, password, and name are required",
    });
  }

  const existingUser = Array.from(users.values()).find((u) => u.email === email);
  if (existingUser) {
    return res.status(409).json({
      success: false,
      message: "User already exists",
    });
  }

  const userId = `user_${Date.now()}`;
  users.set(userId, {
    id: userId,
    email,
    name,
    password, // In production, hash this!
  });

  res.status(201).json({
    success: true,
    user: {
      id: userId,
      email,
      name,
    },
  });
};
