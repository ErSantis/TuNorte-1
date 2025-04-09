import React from 'react';
import { CourseInfoType } from "../types/course.type";
import { ProfessorType } from "../types/professor.type";

export const InformationSection = React.memo(({ info }: { info: CourseInfoType }) => {
  return (
    <section className="et-slide" id="tab-information">
      <h1>Informacion</h1>
      <br />
      {info.professors.map((prof: ProfessorType, index: number) => (
        <div key={index}>
          <h3>Profesor: {prof.fisrtname} {prof.lastname} {prof.lastname}</h3>
          <h3>Email: {prof.email}</h3>
          <br />
        </div>
      ))}
      <h3>Departamento : {info.nameDept}</h3>
    </section>
  );
});