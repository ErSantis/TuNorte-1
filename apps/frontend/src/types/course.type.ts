import { ProfessorType } from "./professor.type";

export type CourseInfoType = {
    name: string;
    nrc: string;
    professors: ProfessorType[];
    nameDept: string;
}


export type CourseTaskType = {
    idtask: number;
    title: string;
    description: string;
    enddate: string;
    status: number;
};

export type CourseLocationType = {
    name: string;
    latitude: number;
    longitude: number;
};

export type CourseScheduleType = {
    day: string;
    starttime: string;
    endtime: string;
    location: CourseLocationType;
}


export type CourseType = {
    info: CourseInfoType;
    schedules: CourseScheduleType[];
    tasks: CourseTaskType[];
};