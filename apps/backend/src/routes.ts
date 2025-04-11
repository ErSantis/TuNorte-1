import { Router } from 'express';
import authRoutes from './routes/auth.routes';
import courseRoutes from './routes/course.routes';
import taskRoutes from './routes/task.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/courses', courseRoutes);
router.use('/tasks', taskRoutes);

export default router;
