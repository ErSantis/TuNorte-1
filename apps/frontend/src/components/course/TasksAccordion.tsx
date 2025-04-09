// components/TaskAccordion.tsx
import * as Accordion from '@radix-ui/react-accordion';
import React from 'react';
import { CourseTaskType } from '../../types/course.type';
import { TaskCard } from './TaskCard';
import '../styles/TaskAccordion.css';

interface TaskAccordionProps {
  title: string;
  tasks: CourseTaskType[];
  emptyMessage: string;
  value: string;
}

const TaskAccordion: React.FC<TaskAccordionProps> = ({
  title,
  tasks,
  emptyMessage,
  value,
}) => {
  return (
    <Accordion.Item className="accordion-item" value={value}>
      <Accordion.Header className="accordion-header">
        <Accordion.Trigger className="accordion-trigger">
          {title}
          <span className="accordion-icon">+</span>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="accordion-content">
        {tasks.length > 0 ? (
          <div className="task-grid">
            {tasks.map((task) => (
              <TaskCard key={task.idtask} task={task} />
            ))}
          </div>
        ) : (
          <p className="empty-message">{emptyMessage}</p>
        )}
      </Accordion.Content>
    </Accordion.Item>
  );
};

export { TaskAccordion };
