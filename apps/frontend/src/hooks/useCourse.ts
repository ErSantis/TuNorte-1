import { useQuery } from "@tanstack/react-query";
import { getCourse } from "../services/course.service";

export const useGetCourse = (nrc: number) => {
    return useQuery({
        queryKey: ["course", nrc],
        queryFn: () => getCourse(nrc),
    })

};