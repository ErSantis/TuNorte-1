import { CourseType } from "../types/course.type";
import { fetcher } from "./api.service";

export const getCourse = async (nrc:number): Promise<CourseType> => { // Fixed function name
    const response = await fetcher(`/subjects?nrc=${nrc}`, {
        method: "GET",
    });
     // Debugging log
    return response; // Ensure correct data extraction

};