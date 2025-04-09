import { Router } from 'express';
import { LoginUser } from "./controllers/user.controller";
import { getstudentCourses } from "./controllers/subject.controller";
import { getCourse } from "./controllers/course.controller";

const router = Router();

router.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

router.post('/auth/login', LoginUser);

router.get('/courses/users/:idStudent', getstudentCourses);

router.get('/subjects', getCourse);

export default router;
