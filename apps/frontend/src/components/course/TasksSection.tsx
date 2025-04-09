// components/TasksSection.tsx
import React from 'react';
import { CourseTaskType } from '../../types/course.type';
import { TaskAccordion } from './TasksAccordion';
import * as Accordion from '@radix-ui/react-accordion';
import '../../styles/TasksSection.css';

interface TasksSectionProps {
  tasks: CourseTaskType[];
}

const TasksSection: React.FC<TasksSectionProps> = ({ tasks }) => {
  console.log('Tasks:', tasks);
  const pendingTasks = tasks.filter((t) => t.status);
  const completedTasks = tasks.filter((t) => !t.status);

  console.log('Pending Tasks:', pendingTasks);
  console.log('Completed Tasks:', completedTasks);


  return (
    <section className="et-slide" id="tab-tasks">
      <h1 className="section-title">Tareas</h1>
      <Accordion.Root type="single" collapsible className="accordion-root">
        <TaskAccordion
          title="Pendientes"
          tasks={pendingTasks}
          emptyMessage="No hay tareas pendientes."
          value="pendientes"
        />
        <TaskAccordion
          title="Finalizadas"
          tasks={completedTasks}
          emptyMessage="No hay tareas finalizadas."
          value="finalizadas"
        />
      </Accordion.Root>
    </section>
  );
};

export { TasksSection };
