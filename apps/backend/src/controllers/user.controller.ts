// src/controllers/auth.controller.ts
import { Request, Response } from "express";
import { loginStudent } from "../services/user.sevice";


export const loginUser = async (req: Request, res: Response) => {
  const { username, password }: { username: string; password: string } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required" });
  }

  try {
  
    const result = await loginStudent(username, password);
    return res.json(result);
  } catch (error: any) {
    if (error.message === "User not found" || error.message === "Invalid credentials") {
      return res.status(401).json({ error: error.message });
    }

    console.error("Error during login:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
