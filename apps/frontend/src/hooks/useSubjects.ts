import { useQuery } from "@tanstack/react-query";
import { getSubjects } from "../services/subjects.service";

export const useGetSubjects = (userId: number) => {
    return useQuery({
        queryKey: ["subjects", userId],
        queryFn: () => getSubjects(userId),
    })

};
