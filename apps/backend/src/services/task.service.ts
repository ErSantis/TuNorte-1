import { AppDataSource } from "../db";
import { Task } from "../entities/Task";


export const completeTaskByid = async (taskId: number): Promise<any> => {

    const taskRepository = AppDataSource.getRepository(Task);

    const task = await taskRepository.findOne({ where: { idtask: taskId } });
    if (!task) {
        throw new Error(`Task with ID ${taskId} not found.`);
    }

    task.status = true;

    await taskRepository.save(task);

    return `Task with ID ${taskId} marked as completed.`;
}

export const editTaskById = async (taskId: number, data: any): Promise<any> => {
    const taskRepository = AppDataSource.getRepository(Task);

    const task = await taskRepository.findOne({ where: { idtask: taskId } });
    if (!task) {
        throw new Error(`Task with ID ${taskId} not found.`);
    }

    Object.assign(task, data);

    await taskRepository.save(task);

    return `Task with ID ${taskId} updated.`;
}
export const deleteTaskById = async (taskId: number): Promise<any> => {
    const taskRepository = AppDataSource.getRepository(Task);

    const task = await taskRepository.findOne({ where: { idtask: taskId } });
    if (!task) {
        throw new Error(`Task with ID ${taskId} not found.`);
    }

    await taskRepository.remove(task);

    return `Task with ID ${taskId} deleted.`;
}
