import { Router } from 'express';
import { LoginUser } from "./controllers/user.controller";
import { getstudentCourses } from "./controllers/subject.controller";
import { getCourse } from "./controllers/course.controller";
import { completeTask, deleteTask, editTask } from './controllers/task.controller';

const router = Router();

router.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

router.post('/auth/login', LoginUser);

router.get('/courses/users/:idStudent', getstudentCourses);

router.get('/subjects', getCourse);

router.put('/tasks/:idtask/status', completeTask);

//Eliminar
router.delete('/tasks/:idtask', deleteTask);

//Editar
router.put('/tasks/:idtask', editTask);


export default router;
