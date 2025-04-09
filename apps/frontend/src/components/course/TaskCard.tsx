import React from 'react';
import { CourseTaskType } from '../types/course.type';

interface TaskCardProps {
  task: CourseTaskType;
}

const TaskCard: React.FC<TaskCardProps> = React.memo(({ task }) => {

  const { title, description, enddate, status } = task;

  return (
    <div className="task-card">
      <div className={`card ${status === 1 ? 'finished' : ''}`}>
        <div className="card-header">{title}</div>
        <div className="card-body">{description}</div>
        <span className="card-footer d-flex justify-content-between align-items-center">{enddate}</span>
        <div className="card-footer d-flex justify-content-between align-items-center">

          <div className="d-flex gap-2">
            <button type="button" className="btn btn-sm btn-primary">Editar</button>
            <button type="button" className="btn btn-sm btn-danger">Eliminar</button>
            <button type="submit" className="btn btn-sm btn-success">Completar</button>
          </div>
        </div>
      </div>
    </div>
  );

});

export { TaskCard };