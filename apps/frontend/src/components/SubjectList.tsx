import { SubjectCard } from './SubjectCard';

export const SubjectList = ({ data }: { data: { Name: string; idDept: string; NRC: string }[] }) => {
  return (
    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-4">
      {data.map((subject) => (
        <SubjectCard key={subject.NRC} subject={subject} />
      ))}
    </div>
  );
};