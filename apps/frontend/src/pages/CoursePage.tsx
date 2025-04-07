import { Hero } from '../components/Hero';
import { InformationSection } from '../components/InformationSection';
import { ScheduleSection } from '../components/ScheduleSection';
import { TasksSection } from '../components/TasksSection';
import { MapSection } from '../components/MapSection';

import '../styles/Course.css';


export const CoursePage = ({ info, schedules, tasks, locations }: { info: any; schedules: any[]; tasks: any[]; locations: any[] }) => {
  return (
    <>
      <Hero name={info.Name} />
      <main className="et-main">
        <InformationSection info={info} />
        <ScheduleSection schedules={schedules} />
        <TasksSection tasks={tasks} />
        <MapSection locations={locations} />
      </main>
    </>
  );
};