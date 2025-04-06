// src/services/auth.service.ts
import { AppDataSource } from "../db";
import { Student } from "../entities/Students";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
const userRepository = AppDataSource.getRepository(Student);

export const loginStudent = async (username: string, password: string) => {
  const foundUser = await userRepository.findOne({
    where: { username }
  });

  if (!foundUser) {
    throw new Error("User not found");
  }

  const isPasswordValid = await bcrypt.compare(password, foundUser.password);

  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  if (!JWT_SECRET) {
    throw new Error("JWT secret is not configured");
  }

  const token = jwt.sign({ id: foundUser.idstudent }, JWT_SECRET, {
    expiresIn: "1h",
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _, ...userWithoutPassword } = foundUser;

  return { user: userWithoutPassword, token };
};
