import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReplayIcon from '@mui/icons-material/Replay';
import { CourseTaskType } from '../../../types/course.type';
import {
  useChangeStatusMutation,
  useDeleteTaskMutation,
  useEditTaskMutation
} from '../../../hooks/useTask';

interface TaskCardProps {
  task: CourseTaskType;
  refetch?: () => void;
}

const TaskCard: React.FC<TaskCardProps> = React.memo(({ task, refetch }) => {
  const { title, description, enddate, status } = task;


  const { mutate: changeStatusTask } = useChangeStatusMutation(task.idtask, () => {
    refetch?.();
     // alternar el estado local
  });

  const { mutate: deleteTask } = useDeleteTaskMutation(task.idtask, () => {
    refetch?.();
  });

  const { mutate: editTask } = useEditTaskMutation(task.idtask, () => {
    refetch?.();
  });

  const handleEditTask = () => {
    editTask();
  };

  const handleDeleteTask = () => {
    deleteTask();
  };

  const handleChageStatusTask = () => {
    changeStatusTask(); // Cambia el estado de la tarea
    refetch?.(); // Refresca la lista de tareas para actualizar la UI
  };

  return (
    <Card
      elevation={3}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: status ? 'rgba(76, 175, 80, 0.08)' : 'grey.100',
        borderLeft: status ? '4px solid #4caf50' : '4px solid #9e9e9e',
        maxWidth: !status ? '300px' : 'none' // Reduce width for pending tasks
      }}
    >
      <CardHeader
        title={title}
        titleTypographyProps={{ variant: 'h6' }}
        sx={{
          bgcolor: status ? 'primary.light' : 'grey.300',
          color: status ? 'primary.contrastText' : 'text.primary',
          pb: 1
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Chip
            label={enddate}
            size="small"
            color={status ? 'primary' : 'default'}
            variant="outlined"
            sx={{ fontWeight: 'medium' }}
          />
          {!status && (
            <Chip
              label="Completada"
              size="small"
              color="success"
              icon={<CheckCircleIcon />}
            />
          )}
        </Box>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        {status ? (
          <>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              startIcon={<EditIcon />}
              onClick={handleEditTask}
            >
              Editar
            </Button>
            <Button
              size="small"
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={handleDeleteTask}
            >
              Eliminar
            </Button>
            <Button
              size="small"
              variant="contained"
              color="success"
              startIcon={<CheckCircleIcon />}
              onClick={handleChageStatusTask}
            >
              Completar
            </Button>
          </>
        ) : (
          <Button
            size="small"
            variant="contained"
            color="primary"
            startIcon={<ReplayIcon />}
            onClick={handleChageStatusTask} // Aquí también puede ser una mutación "restoreTask" si tienes una aparte
          >
            Restaurar
          </Button>
        )}
      </CardActions>
    </Card>
  );
});

export default TaskCard;
