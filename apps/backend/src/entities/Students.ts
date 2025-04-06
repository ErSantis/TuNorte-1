import "reflect-metadata"
import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Department } from "./Departments";
import { CoursesRegister } from "./CourseRegister";
import { Task } from "./Task";

@Entity('students')
export class Student {
  @PrimaryColumn({ type: 'varchar', length: 30 })
  idstudent!: string;

  @Column({ type: 'varchar', length: 10, unique: true })
  username!: string;

  @Column({ type: 'varchar', length: 30 })
  password!: string;

  @Column({ type: 'varchar', length: 30 })
  name!: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  middlename!: string;

  @Column({ type: 'varchar', length: 30 })
  lastname!: string;

  @Column({ type: 'varchar', length: 100 })
  email!: string;

  @ManyToOne(() => Department, (dept) => dept.students)
  @JoinColumn({ name: 'iddept' })
  department!: Department;

  @OneToMany(() => CoursesRegister, (cr) => cr.student)
  courseregisters!: CoursesRegister[];

  @OneToMany(() => Task, (task) => task.student)
  tasks!: Task[];
}

