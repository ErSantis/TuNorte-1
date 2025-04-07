export const ScheduleSection = ({ schedules }: { schedules: any[] }) => {
  return (
    <section className="et-slide" id="tab-schedule">
      <h1>Horarios</h1>
      <br />
      {schedules.map((schedule, index) => (
        <h3 key={index}>
          <b>{schedule.Day}:</b> <br />
          {schedule.StartTime} - {schedule.EndTime} <br />
          {schedule.Name}
        </h3>
      ))}
    </section>
  );
};