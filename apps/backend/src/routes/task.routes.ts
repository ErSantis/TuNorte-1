import { Router } from 'express';
import { completeTask, createTask, deleteTask, editTask } from '../controllers/task.controller';

const router = Router();

router.put('/:idtask/status', completeTask);
router.delete('/:idtask', deleteTask);
router.put('/:idtask', editTask);
router.post('/', createTask);

export default router;
