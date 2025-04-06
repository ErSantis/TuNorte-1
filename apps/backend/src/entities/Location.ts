import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Schedule } from "./Schedule";

@Entity()
export class Location {
  @PrimaryGeneratedColumn({ type: 'int' })
  idlocation!: number;

  @Column({ type: 'varchar', length: 20 })
  name!: string;

  @Column({ type: 'varchar', length: 150 })
  description!: string;

  @Column({ type: 'double precision' })
  latitude!: number;

  @Column({ type: 'double precision' })
  longitude!: number;

  @OneToMany(() => Schedule, (sch) => sch.location)
  schedules!: Schedule[];
}
