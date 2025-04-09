import { CourseScheduleType } from "../types/course.type";

export const ScheduleSection = ({ schedules }: { schedules: CourseScheduleType[] }) => {
  return (
    <section className="et-slide" id="tab-schedule">
      <h1>Horarios</h1>
      <br />
      {schedules.map((schedule, index) => (
        <h3 key={index}>
          <b>{schedule.day}:</b> <br />
          {schedule.starttime} - {schedule.endtime} <br />
        </h3>
      ))}
    </section>
  );
};