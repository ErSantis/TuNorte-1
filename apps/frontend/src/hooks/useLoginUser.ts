import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../services/users.service";
import { StudentLogin } from "../types/student";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export const useLoginUser = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    return useMutation({
        mutationFn: ({ username, password }: StudentLogin) => loginUser(username, password),
        onSuccess: (data) => {
            login(data); // Use the login method from useAuth
            navigate("/home");
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (error: any) => {
            alert(error.message || "Error al iniciar sesión.");
        },
    });
};

