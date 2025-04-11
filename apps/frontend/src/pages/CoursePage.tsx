import { Hero } from '../components/course/navbar/Hero';
import { InformationSection } from '../components/course/info/InformationSection';
import { ScheduleSection } from '../components/course/schedules/ScheduleSection';
import { TasksSection } from '../components/course/tasks/TasksSection';
import { MapSection } from '../components/course/map/MapSection';
import { useGetCourse } from '../hooks/useCourse';
import { useSearchParams } from 'react-router-dom';
import ErrorComponent from '../components/ErrorComponent';
import Spinner from '../components/Spinner';

export const CoursePage = () => {
  const [searchParams] = useSearchParams();
  const nrc = searchParams.get('NRC');

  const nrcNumber = nrc ? parseInt(nrc, 10) : null;

  const { data, isLoading, error, refetch } = useGetCourse(nrcNumber as number);

  if (isLoading) return <Spinner />; // Show a loading spinner while fetching data

  if (error || !data)
    return (
      <ErrorComponent message={error?.message || 'An unknown error occurred'} />
    );

  const { info, schedules, tasks } = data || {}; // Destructure data to avoid undefined errors

  return (
    <div className="coursePage">
      <nav>
        <Hero name={info.name} />
      </nav>
      <main>
        <InformationSection info={info} />
        <ScheduleSection schedules={schedules} />
        <TasksSection
          tasks={tasks}
          nrc={nrcNumber as number}
          refetch={refetch}
        />
        <MapSection
          locations={schedules.map((schedule) => schedule.location)}
        />
      </main>
    </div>
  );
};
