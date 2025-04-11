import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../services/users.service";
import { StudentLogin } from "../types/student";

export const useLoginUser = () => {
    return useMutation({
        mutationFn: ({ username, password }: StudentLogin) => loginUser(username, password),
    });
};

