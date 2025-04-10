import React from 'react';
import { 
  Grid, 
  Typography 
} from '@mui/material';
import { CourseTaskType } from '../../../types/course.type';
import TaskCard from './TaskCard';

interface TaskAccordionProps {
  tasks: CourseTaskType[];
  emptyMessage: string;
  refetch: () => void;
}

const TaskAccordion: React.FC<TaskAccordionProps> = ({
  tasks,
  emptyMessage,
  refetch,
}) => {
  return (
    <div>
      {tasks.length > 0 ? (
        <Grid container spacing={3}>
          {tasks.map((task) => (
            <Grid key={task.idtask}>
              <TaskCard task={task} refetch={refetch} />
            </Grid>
          ))}
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