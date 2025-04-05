
import "reflect-metadata"
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    user_id!: number;

    @Column('varchar', { length: 255 })
    name!: string;

    @Column('varchar', { length: 255 })
    lastname!: string;

    @Column('varchar', { length: 255 })
    user!: string;

    @Column('varchar', { length: 255 })
    password!: string;

    @Column('int')
    dept_id!: number;
}

