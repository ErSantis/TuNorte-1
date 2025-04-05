import { fetcher } from "./api.service";
import { saveSession } from "./session.service";

export const loginUser = async (user: string, password: string): Promise<void> => {
    console.log("Login attempt:", { user, password });
    const response = await fetcher("/auth/login", {
        method: "POST",
        body: JSON.stringify({ user, password }),
    });

    const { token } = response;

    console.log("JWT Token:", token);
    saveSession(token);
};
