import {
    Entity,
    Column,
    PrimaryColumn,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';

import { Department } from './Departments';
import { Course } from './Course';

@Entity()
export class Subject {
  @PrimaryColumn({ type: 'varchar', length: 10 })
  idsubject!: string;

  @Column({ type: 'varchar', length: 30 })
  name!: string;

  @ManyToOne(() => Department, (dept) => dept.subjects)
  @JoinColumn({ name: 'iddept' })
  department!: Department;

  @Column({ type: 'int' })
  credits!: number;

  @OneToMany(() => Course, (course) => course.subject)
  courses!: Course[];
}

