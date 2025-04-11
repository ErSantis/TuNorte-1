import { StudentSessionType } from "../types/student";
import { fetcher } from "./api.service";


export const loginUser = async (username: string, password: string): Promise<StudentSessionType> => {
    const response = await fetcher("/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
    });
    return response;
}