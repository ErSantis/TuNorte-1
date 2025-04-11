import { useQuery } from "@tanstack/react-query";
import { getSubjects } from "../services/subjest.service";

export const useGetSubjects = (userId: number) => {
    return useQuery({
        queryKey: ["subjects", userId],
        queryFn: () => getSubjects(userId),
    })

};
