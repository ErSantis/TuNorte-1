import { CourseNewTaskType } from "../types/course.type";
import { fetcher } from "./api.service";

export const chageStatusTasks = async (idtask: number): Promise<any> => {
    const response = await fetcher(`/tasks/${idtask}/status`, {
        method: "PUT",
    });

    return response; // Ensure correct data extraction
}

export const editTask = async (idtask: number, data: CourseNewTaskType): Promise<any> => {
    const response = await fetcher(`/tasks/${idtask}`, {
        method: "PUT",
        body: JSON.stringify(data),
    });
    return response; // Ensure correct data extraction
}

export const deleteTask = async (idtask: number): Promise<any> => {
    const response = await fetcher(`/tasks/${idtask}`, {
        method: "DELETE",
    });
    return response; // Ensure correct data extraction
}

export const createTask = async (data: CourseNewTaskType): Promise<any> => {
    
    const response = await fetcher(`/tasks/`, {
        method: "POST",
        body: JSON.stringify(data),
    });
    return response; // Ensure correct data extraction
}