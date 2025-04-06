// src/services/student.service.ts
import { AppDataSource } from "../db";
import { CoursesRegister } from "../entities/CourseRegister";

export const getCoursesByStudentId = async (idStudent: string) => {
  const repo = AppDataSource.getRepository(CoursesRegister);

  const results = await repo.find({
    where: {
      student: { idstudent: idStudent }
    },
    relations: {
      student: true,
      course: {
        subject: {
          department: true
        },
        professor: true
      }
    }
  });

  return results.map(reg => ({
    NRC: reg.course.nrc,
    Name: reg.course.subject.name,
    idDept: reg.course.subject.department.iddept
  }));
};
