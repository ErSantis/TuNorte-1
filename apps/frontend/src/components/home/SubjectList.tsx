import React from 'react';
import { SubjectCard } from './SubjectCard';
import { SubjectType } from '../types/subject.type';

interface SubjectListProps {
  data: SubjectType[];
}

const SubjectList: React.FC<SubjectListProps> = React.memo(({ data }) => (
  <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-4">
    {data.map((subject) => (
      <SubjectCard key={subject.NRC} subject={subject} />
    ))}
  </div>
));

export { SubjectList };