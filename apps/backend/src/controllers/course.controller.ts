import { Request, Response } from "express";
import { getCourseDetail } from "../services/course.service";

export const getCourse = async (req: Request, res: Response) => {
  console.log("Obteniendo detalle del curso");
  const { nrc } = req.query;

  try {
    const course = await getCourseDetail(nrc as string);

    if (!course) {
      return res.status(404).json({ message: "Curso no encontrado" });
    }

    return res.json(course);
  } catch (err) {
    console.error("Error obteniendo detalle del curso:", err);
    return res.status(500).json({ message: "Error interno del servidor" });
  }


};
