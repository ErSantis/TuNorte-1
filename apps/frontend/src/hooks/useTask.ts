import { useMutation} from "@tanstack/react-query";
import { completeTasks, deleteTask } from "../services/tasks.service";

export const useCompleteTaskMutation = (idtask: number, refetch: (() => void)) => {


  return useMutation({
    mutationKey: ["completeTask", idtask],
    mutationFn: () => completeTasks(idtask),
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
