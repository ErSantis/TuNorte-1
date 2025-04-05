import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../services/users.service";
import { UserLogin } from "../types/user.type";

export const useLoginUser = () => {
    
    return useMutation({
        mutationFn: ({ user, password }: UserLogin) => loginUser(user, password),
        onSuccess: () => {
            alert("¡Inicio de sesión exitoso!");
            // Redirige, carga perfil, etc.
        },
        onError: (error: any) => {
            alert(error.message || "Error al iniciar sesión.");
        },
    });
};
