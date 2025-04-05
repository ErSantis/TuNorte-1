import { fetcher } from "./api.service";
import { saveSession } from "./session.service";

export const loginUser = async (user: string, password: string): Promise<void> => {
    console.log("Login attempt:", { user, password });
    const response = await fetcher("/auth/login", {
        method: "POST",
        body: JSON.stringify({ user, password }),
    });

    const { token, ...userData } = response;

    saveSession(token, userData);
    
    console.log("User data:", userData);
    console.log("JWT Token:", token);
    
}