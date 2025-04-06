import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./Course";
import { Student } from "./Students";

@Entity('coursesregister')
export class CoursesRegister {
  @PrimaryGeneratedColumn({ type: 'int' })
  id!: number;

  @ManyToOne(() => Student, (student) => student.courseregisters)
  @JoinColumn({ name: 'idstudent' })
  student!: Student;

  @ManyToOne(() => Course, (course) => course.courseregisters)
  @JoinColumn({ name: 'nrc' })
  course!: Course;
}
