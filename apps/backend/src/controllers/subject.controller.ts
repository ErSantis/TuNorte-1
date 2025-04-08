// src/controllers/student.controller.ts
import { Request, Response } from "express";
import { getCoursesByStudentId } from "../services/subject.service";

export const getstudentCourses = async (req: Request, res: Response) => {
  const { idStudent } = req.params;
  
  if (!idStudent) {
    return res.status(400).json({ error: "ID Student is required" });
  }

  try {
    const courses = await getCoursesByStudentId(idStudent);
    return res.json(courses);
  } catch (error) {
    console.error("Error retrieving student courses:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
