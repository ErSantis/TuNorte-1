import { SubjectType } from "../types/subject.type";
import { fetcher } from "./api.service";

export const getSubjects = async (user_id: string): Promise<SubjectType[]> => { // Fixed function name
    const response = await fetcher(`/courses/users/${user_id}`, {
        method: "GET",
    });
    
    return response; // Ensure correct data extraction
};