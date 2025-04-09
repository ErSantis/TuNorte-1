import { CourseTaskType } from '../types/course.type';
import { TaskCard } from './TaskCard';

export const TasksSection = ({ tasks }: { tasks: CourseTaskType[] }) => {
  const pendingTasks = tasks.filter((task) => task.status === 0);
  const completedTasks = tasks.filter((task) => task.status === 1);

  return (
    <section className="et-slide" id="tab-tasks">
      <h1>Tareas</h1>
      <div className="collapsible-tabs__wrapper">
        <div className="collapsibles-wrapper">
          <button type="button" className="collapsible-trigger-btn">Pendientes</button>
          <div className="collapsible-content">
            <div className="collapsible-content__inner">
              <div className="row row-col-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-4 mt-3">
                {pendingTasks.length > 0 ? (
                  pendingTasks.map((task) => <TaskCard key={task.idtask} task={task} />)
                ) : (
                  <p>No hay tareas pendientes.</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="collapsibles-wrapper">
          <button type="button" className="collapsible-trigger-btn">Finalizadas</button>
          <div className="collapsible-content">
            <div className="collapsible-content__inner">
              <div className="row row-col-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-4 mt-3">
                {completedTasks.map((task) => <TaskCard key={task.idtask} task={task} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};