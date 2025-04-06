import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./Course";
import { Professor } from "./Professor";

@Entity()
export class CourseProf {
  @PrimaryGeneratedColumn({ type: 'int' })
  id!: number;

  @ManyToOne(() => Professor, (professor) => professor.courseprofs)
  @JoinColumn({ name: 'idprofessor' })
  professor!: Professor;

  @ManyToOne(() => Course, (course) => course.courseprofs)
  @JoinColumn({ name: 'nrc' })
  course!: Course;
}
