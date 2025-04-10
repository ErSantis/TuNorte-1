import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CourseTaskType } from '../../../types/course.type';
import { TaskAccordion } from './TasksAccordion';

interface TasksSectionProps {
  tasks: CourseTaskType[];
  refetch: () => void;
}

const TasksSection: React.FC<TasksSectionProps> = ({ tasks, refetch }) => {
  const pendingTasks = tasks.filter((t) => t.status); // Pending tasks
  const completedTasks = tasks.filter((t) => !t.status); // Completed tasks

  // Debugging: Log tasks to verify data
  console.log("All tasks:", tasks);
  console.log("Pending tasks:", pendingTasks);
  console.log("Completed tasks:", completedTasks);

  return (
    <Box
      component="section"
      id="tab-tasks"
      sx={{
        py: 4,
        px: 2,
        maxWidth: 1200,
        mx: 'auto'
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
        <AssignmentIcon sx={{ mr: 1 }} /> Tareas
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              bgcolor: 'primary.light',
              color: 'primary.contrastText',
              '&.Mui-expanded': {
                bgcolor: 'primary.main',
              }
            }}
          >
            <Typography variant="h6">Pendientes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TaskAccordion
              tasks={pendingTasks}
              emptyMessage="No hay tareas pendientes."
              refetch={refetch}
            />
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{
              bgcolor: 'success.light',
              color: 'success.contrastText',
              '&.Mui-expanded': {
                bgcolor: 'success.main',
              }
            }}
          >
            <Typography variant="h6">Finalizadas</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TaskAccordion
              tasks={completedTasks}
              emptyMessage="No hay tareas finalizadas."
              refetch={refetch}
            />
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export { TasksSection };