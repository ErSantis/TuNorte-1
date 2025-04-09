import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Department } from "./Departments";
import { Course } from "./Course";
import { CourseProf } from "./CourseProf";

@Entity('professors')
export class Professor {
  @PrimaryGeneratedColumn({ type: 'int' })
  idprofessor!: number;

  @Column({ type: 'varchar', length: 30 })
  firstname!: string;

  @Column({ type: 'varchar', length: 30 })
  middlename!: string;

  @Column({ type: 'varchar', length: 30 })
  lastname!: string;

  @Column({ type: 'varchar', length: 100 })
  email: string | undefined;

  @ManyToOne(() => Department, (dept) => dept.professors)
  @JoinColumn({ name: 'iddept' })
  department!: Department;

  @OneToMany(() => Course, (course) => course.professor)
  courses!: Course[];

  @OneToMany(() => CourseProf, (cp) => cp.professor)
  courseprofs!: CourseProf[];
}
