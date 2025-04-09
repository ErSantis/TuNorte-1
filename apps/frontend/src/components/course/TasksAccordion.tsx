import React from 'react';
import { 
  Grid, 
  Typography 
} from '@mui/material';
import { CourseTaskType } from '../../types/course.type';
import { TaskCard } from './TaskCard';

interface TaskAccordionProps {
  tasks: CourseTaskType[];
  emptyMessage: string;
}

const TaskAccordion: React.FC<TaskAccordionProps> = ({
  tasks,
  emptyMessage,
}) => {
  return (
    <>
      {tasks.length > 0 ? (
        <Grid container spacing={3}>
          {tasks.map((task) => (
            <Grid >
              <TaskCard task={task} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1" sx={{ py: 2, textAlign: 'center' }}>
          {emptyMessage}
        </Typography>
      )}
    </>
  );
};

export { TaskAccordion };