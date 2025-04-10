import { Hero } from '../components/course/navbar/Hero';
import { InformationSection } from '../components/course/info/InformationSection';
import { ScheduleSection } from '../components/course/schedules/ScheduleSection';
import { TasksSection } from '../components/course/tasks/TasksSection';
import { MapSection } from '../components/course/map/MapSection';
import { useGetCourse } from '../hooks/useGetCourse';

import '../styles/CoursePage.css';

import { useSearchParams } from 'react-router-dom';


export const CoursePage = () => {

  const [searchParams] = useSearchParams();
  const nrc = searchParams.get("NRC");

  const nrcNumber = nrc ? parseInt(nrc, 10) : null;

  const { data, isLoading, error, refetch } = useGetCourse(nrcNumber as number); // Assuming NRC is the course identifier

  if (isLoading) return <div>Loading...</div>;

  if (error || !data) return <div>Error loading course data</div>; // Added check for !data

  return (
    <>
      <Hero name={data.info.name} />
      <main className="et-main">
        <section id="tab-information">
          <InformationSection info={data.info} />
        </section>
        <section id="tab-schedule">
          <ScheduleSection schedules={data.schedules} />
        </section>
        <section id="tab-tasks">
          <TasksSection tasks={data.tasks} refetch={refetch} />
        </section>
        <section id="tab-map">
          <MapSection locations={data.schedules.map(schedule => schedule.location)} />
        </section>
      </main>
    </>
  );
};