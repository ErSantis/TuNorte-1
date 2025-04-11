// TaskAccordion.tsx

import React, { useState } from 'react';
import {
  Grid,
  Typography,
  Button
} from '@mui/material';
import { CourseNewTaskType, CourseTaskType } from '../../../types/course.type';
import TaskCard from './TaskCard';
import CreateTaskModal from './CreateTaskModal';
import { useCreateTaskMutation } from '../../../hooks/useTask';
import { useAuth } from '../../../context/AuthContext';

interface TaskAccordionProps {
  tasks: CourseTaskType[];
  emptyMessage: string;
  nrc: number;
  refetch: () => void;
}

const TaskAccordion: React.FC<TaskAccordionProps> = ({
  tasks,
  emptyMessage,
  nrc,
  refetch,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const { mutate: CreateTaskMutation } = useCreateTaskMutation(nrc ,refetch);
  const { user } = useAuth();
  
  const { idstudent } = user;

  const handleCreateTask = (title: string, description: string, enddate: string) => {
    const newTask: CourseNewTaskType = {
      title,
      description,
      enddate,
      idstudent,
      nrc,
      status: true, // Cambia el valor de status a true
    };
    CreateTaskMutation({ newTask }); // Convert idstudent to a number
    refetch();
  };

  return (
    <div>
      <CreateTaskModal open={isModalOpen} onClose={handleCloseModal} onCreate={handleCreateTask} />
      {tasks.length > 0 ? (
        <Grid container spacing={2} alignItems="center">
          {tasks.map((task) => (
            <Grid key={task.idtask}> {/* Agrega una clave única */}
              <TaskCard task={task} refetch={refetch} />
            </Grid>
          ))}
          <Grid>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpenModal}
              sx={{
                width: '100%',
                maxWidth: 100,
                height: 56,
                display: 'flex',
                justifyContent: 'center',
                fontSize: '1.5rem',
              }}
            >
              +
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Typography variant="body1" sx={{ py: 2, textAlign: 'center' }}>
          {emptyMessage}
        </Typography>
      )}
    </div>
  );
};

export { TaskAccordion };