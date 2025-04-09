import { Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Professor } from "./Professor";
import { Subject } from "./Subjects";
import { CoursesRegister } from "./CourseRegister";
import { CourseProf } from "./CourseProf";
import { Task } from "./Task";
import { Schedule } from "./Schedule";

@Entity()
export class Course {
  @PrimaryColumn({ type: 'int' })
  nrc!: number;

  @ManyToOne(() => Professor, (prof) => prof.courses)
  @JoinColumn({ name: 'idprofessor' })
  professor!: Professor;

  @ManyToOne(() => Subject, (subj) => subj.courses)
  @JoinColumn({ name: 'idsubject' })
  subject!: Subject;

  @OneToMany(() => CoursesRegister, (cr) => cr.course)
  courseregisters!: CoursesRegister[];

  @OneToMany(() => Schedule, (sch) => sch.course)
  schedules!: Schedule[];

  @OneToMany(() => Task, (task) => task.course)
  tasks!: Task[];

  @OneToMany(() => CourseProf, (cp) => cp.course)
  courseprofs!: CourseProf[];

  
}
