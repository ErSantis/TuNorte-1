import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./Course";
import { Location } from "./Location";

@Entity('schedules')
export class Schedule {
  @PrimaryGeneratedColumn({ type: 'int' })
  idschedule!: number;

  @Column({ type: 'varchar', length: 20 })
  day!: string;

  @Column({ type: 'time' })
  starttime!: string;

  @Column({ type: 'time' })
  endtime!: string;

  @ManyToOne(() => Course, (course) => course.schedules)
  @JoinColumn({ name: 'nrc' })
  course!: Course;

  @ManyToOne(() => Location, (loc) => loc.schedules)
  @JoinColumn({ name: 'idlocation' })
  location!: Location;
}
