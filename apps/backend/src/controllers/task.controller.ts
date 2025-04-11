import { Request, Response } from "express";
import { completeTaskByid, createTaskByNrc, deleteTaskById, editTaskById } from "../services/task.service";

export const completeTask = async (req: Request, res: Response) => {

    const { idtask } = req.params;


    const parsedId = parseInt(idtask, 10);

    try {
        const result = await completeTaskByid(parsedId);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error completing task' });
    }
}

export const editTask = async (req: Request, res: Response) => {
    const { idtask } = req.params;
    const data = req.body;

    const parsedId = parseInt(idtask, 10);

    try {
        const result = await editTaskById(parsedId, data);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error editing task' });
    }
}

export const deleteTask = async (req: Request, res: Response) => {
    const { idtask } = req.params;

    const parsedId = parseInt(idtask, 10);

    try {
        const result = await deleteTaskById(parsedId);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting task' });
    }
}


export const createTask = async (req: Request, res: Response) => {

    const data = req.body;

    try {
        const result = await createTaskByNrc(data);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating task' });
    }
}
