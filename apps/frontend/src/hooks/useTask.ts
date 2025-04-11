import { useMutation} from "@tanstack/react-query";
import { chageStatusTasks, deleteTask } from "../services/tasks.service";

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

export const useCreateTaskMutation = (idcourse: number, refetch: (() => void)) => {
  return useMutation({
    mutationKey: ["createTask", idcourse],
    mutationFn: () => deleteTask(idcourse),
    onSuccess: () => {
      refetch();
    },
  });
}
