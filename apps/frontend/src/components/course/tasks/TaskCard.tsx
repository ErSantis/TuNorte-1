import React from 'react';
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
import { CourseTaskType } from '../../../types/course.type';
import { useCompleteTaskMutation, useDeleteTaskMutation, useEditTaskMutation } from '../../../hooks/useTask';

interface TaskCardProps {
  task: CourseTaskType;
  refetch?: () => void; // Optional refetch function
}
const TaskCard: React.FC<TaskCardProps> = React.memo(({ task, refetch }) => {
  
  const { title, description, enddate, status } = task;

  const { mutate: completeTask } = useCompleteTaskMutation(task.idtask, () => {
    refetch?.();
  });

  const { mutate: deleteTask } = useDeleteTaskMutation(task.idtask, () => {
    refetch?.();
  });

  const { mutate: editTask } = useEditTaskMutation(task.idtask,  () => {
    refetch?.();
  });

  //hanldle edit task
  const handleEditTask = () => {
    // Implement your edit task logic here
    editTask();
  };

  //handle delete task

  const handleDeleteTask = () => {
    // Implement your delete task logic here
    deleteTask();
  };

  //handle complete task
  const handleCompleteTask = () => {
    // Implement your complete task logic here
    completeTask();
  };


  return (
    <Card
      elevation={3}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: status === 1 ? 'rgba(76, 175, 80, 0.08)' : 'background.paper',
        borderLeft: status === 1 ? '4px solid #4caf50' : 'none'
      }}
    >
      <CardHeader
        title={title}
        titleTypographyProps={{ variant: 'h6' }}
        sx={{
          bgcolor: status === 1 ? 'rgba(76, 175, 80, 0.12)' : 'primary.light',
          color: status === 1 ? 'text.primary' : 'primary.contrastText',
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
            color={status === 1 ? "success" : "primary"}
            variant="outlined"
            sx={{ fontWeight: 'medium' }}
          />
          {status === 1 && (
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
        <Button
          size="small"
          variant="outlined"
          color="primary"
          startIcon={<EditIcon />}
          onClick={() => handleEditTask()}
        >
          Editar
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={() => handleDeleteTask()}
        >
          Eliminar
        </Button>
        {status !== 1 && (
          <Button
            size="small"
            variant="contained"
            color="success"
            startIcon={<CheckCircleIcon />}
            onClick={() => handleCompleteTask()}
          >
            Completar
          </Button>
        )}
      </CardActions>
    </Card>
  );
});

export { TaskCard };