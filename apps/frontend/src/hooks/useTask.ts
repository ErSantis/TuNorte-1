import { useMutation } from "@tanstack/react-query";
import { chageStatusTasks, createTask, deleteTask } from "../services/tasks.service";
import { CourseNewTaskType} from "../types/course.type";

export const useChangeStatusMutation = (idtask: number, refetch: (() => void)) => {


  return useMutation({
    mutationKey: ["completeTask", idtask],
    mutationFn: () => chageStatusTasks(idtask),
    onSuccess: () => {
      refetch();
    },
  });
};

export const useDeleteTaskMutation = (idtask: number, refetch: (() => void)) => {
  return useMutation({
    mutationKey: ["deleteTask", idtask],
    mutationFn: () => deleteTask(idtask),
    onSuccess: () => {
      refetch();
    },
  });
}

export const useEditTaskMutation = (idtask: number, refetch: (() => void)) => {
  return useMutation({
    mutationKey: ["editTask", idtask],
    mutationFn: () => deleteTask(idtask),
    onSuccess: () => {
      refetch();
    },
  });
}

export const useCreateTaskMutation = (nrc: number, refetch: (() => void)) => {
  return useMutation({
    mutationKey: ["createTask", nrc],
    mutationFn: ({ newTask}: { newTask: CourseNewTaskType}) => createTask(newTask),
    onSuccess: () => {
      refetch();
    },
  });
}
