import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Student } from './Students';
import { Course } from './Course';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('increment', { type: 'int' })
  idtask!: number;

  @Column({ type: 'varchar', length: 50 })
  title!: string;

  @Column({ type: 'varchar', length: 300 })
  description!: string;

  @Column({ type: 'date' })
  enddate!: Date;

  @Column({ type: 'boolean' })
  status!: boolean;

  @ManyToOne(() => Course, (course) => course.tasks)
  @JoinColumn({ name: 'nrc' })
  course!: Course;

  @ManyToOne(() => Student, (student) => student.tasks)
  @JoinColumn({ name: 'idstudent' })
  student!: Student;
}
