import { Hero } from '../components/course/Hero';
import { InformationSection } from '../components/course/InformationSection';
import { ScheduleSection } from '../components/course/ScheduleSection';
import { TasksSection } from '../components/course/TasksSection';
import { MapSection } from '../components/course/MapSection';
import { useGetCourse } from '../hooks/useGetCourse';

import '../styles/CoursePage.css';

import { useSearchParams } from 'react-router-dom';


export const CoursePage = () => {

  const [searchParams] = useSearchParams();
  const nrc = searchParams.get("NRC");


  const nrcNumber = nrc ? parseInt(nrc, 10) : null;

  const { data, isLoading, error } = useGetCourse(nrcNumber as number); // Assuming NRC is the course identifier


  if (isLoading) return <div>Loading...</div>;

  if (error || !data) return <div>Error loading course data</div>; // Added check for !data

  console.log("Course data:", data); // Debugging log
  
  return (
    <>
      <Hero name={data.info.name} />
      <main className="et-main">
        <InformationSection info={data.info} />
         <ScheduleSection schedules={data.schedules} />
        <TasksSection tasks={data.tasks} />
        <MapSection locations={data.schedules.map(schedule => schedule.location)} />
      </main> *
    </>
  );
};