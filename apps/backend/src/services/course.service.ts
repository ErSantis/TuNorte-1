import { AppDataSource } from "../db";
import { Course } from "../entities/Course";
import { CourseProf } from "../entities/CourseProf";


export const getCourseDetail = async (nrc: string) => {
    const courseRepo = AppDataSource.getRepository(Course);
    const courseProfRepo = AppDataSource.getRepository(CourseProf);

    const course = await courseRepo.findOne({
        where: { nrc: parseInt(nrc) },
        relations: {
            subject: {
                department: true,
            },
            professor: true,
            schedules: {
                location: true,
            },
            tasks: true,
        },
    });

    if (!course) return null;

    // Obtener profesores adicionales
    const courseProfs = await courseProfRepo.find({
        where: { course: { nrc: course.nrc } },
        relations: { professor: true },
    });

    const allProfessors = courseProfs.map(cp => cp.professor);

    const result = {
        info: {
            name: course.subject.name,
            nrc: course.nrc.toString(),
            nameDept: course.subject.department.namedept,
            professors: allProfessors.map(p => ({
                idProfessor: p.idprofessor,
                firstname: p.firstname,
                middlename: p.middlename,
                lastname: p.lastname,
                email: p.email,
            })),
        },
        schedules: course.schedules.map(s => ({
            day: s.day,
            starttime: s.starttime,
            endtime: s.endtime,
            location: {
                name: s.location.name,
                latitude: s.location.latitude,
                longitude: s.location.longitude,
            },  
        })),
        tasks: course.tasks.map(t => ({
            idtask: t.idtask,
            title: t.title,
            description: t.description,
            enddate: t.enddate,
            status: t.status,
        })),
    };

    return result;
};
