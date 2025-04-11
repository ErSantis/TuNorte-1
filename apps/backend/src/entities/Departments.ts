import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Student } from './Students';
import { Professor } from './Professor';
import { Subject } from './Subjects';

@Entity('departments')
export class Department {
  @PrimaryColumn({ type: 'varchar', length: 4 })
  iddept!: string;

  @Column({ type: 'varchar', length: 50 })
  namedept!: string;

  @Column({ type: 'varchar', length: 30 })
  division!: string;

  @OneToMany(() => Professor, (professor) => professor.department)
  professors!: Professor[] | undefined;

  @OneToMany(() => Student, (student) => student.department)
  students!: Student[];

  @OneToMany(() => Subject, (subject) => subject.department)
  subjects!: Subject[];
}
