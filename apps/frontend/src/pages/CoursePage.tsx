import { Hero } from '../components/course/navbar/Hero';
import { InformationSection } from '../components/course/info/InformationSection';
import { ScheduleSection } from '../components/course/schedules/ScheduleSection';
import { TasksSection } from '../components/course/tasks/TasksSection';
import { MapSection } from '../components/course/map/MapSection';
import { useGetCourse } from '../hooks/useCourse';

import '../styles/CoursePage.css';

import { useSearchParams } from 'react-router-dom';
import ErrorComponent from '../components/ErrorComponent';
import Spinner from '../components/Spinner';


export const CoursePage = () => {

  const [searchParams] = useSearchParams();
  const nrc = searchParams.get("NRC");

  const nrcNumber = nrc ? parseInt(nrc, 10) : null;

  const { data, isLoading, error, refetch } = useGetCourse(nrcNumber as number);

  console.log("Course data:", data); // Log the course data to check its structure

  if (isLoading) return <Spinner />; // Show a loading spinner while fetching data

  if (error || !data) return <ErrorComponent message={error?.message || "An unknown error occurred"} />;
  
  const { info, schedules, tasks } = data || {}; // Destructure data to avoid undefined errors
 
  return (
    <>
      <Hero name={info.name} />
      <main className="et-main">
        <section id="tab-information">
          <InformationSection info={info} />
        </section>
        <section id="tab-schedule">
          <ScheduleSection schedules={schedules} />
        </section>
        <section id="tab-tasks">
          <TasksSection tasks={tasks} refetch={refetch} nrc={nrcNumber as number} />
        </section>
        <section id="tab-map">
          <MapSection locations={schedules.map(schedule => schedule.location)} />
        </section>
      </main>
    </>
  );
};