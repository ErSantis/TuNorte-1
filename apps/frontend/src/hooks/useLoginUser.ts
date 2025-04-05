import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../services/users.service";
import { UserLogin } from "../types/user.type";
import { useNavigate } from "react-router-dom";


export const useLoginUser = () => {

    const navigate = useNavigate();


    return useMutation({
        mutationFn: ({ user, password }: UserLogin) => loginUser(user, password),
        onSuccess: () => {
            navigate("/home");
        },
        onError: (error: any) => {
            alert(error.message || "Error al iniciar sesión.");
        },
    });
};

