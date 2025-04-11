import { Router } from 'express';
import { getstudentCourses } from '../controllers/subject.controller';
import { getCourse } from '../controllers/course.controller';

const router = Router();

router.get('/users/:idStudent', getstudentCourses);
router.get('/subjects', getCourse);

export default router;
