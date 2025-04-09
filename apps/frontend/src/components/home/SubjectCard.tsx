import React from 'react';
import { Link } from 'react-router-dom';
import { SubjectType } from '../types/subject.type';

interface SubjectCardProps {
  subject: SubjectType;
}

const SubjectCard: React.FC<SubjectCardProps> = React.memo(({ subject }) => {
  const { Name, idDept, NRC } = subject;

  return (
    <div className="col mb-4" key={NRC}>
      <Link to={`/subjects?NRC=${NRC}`} className="card-link">
        <div className="card hover-animation" id={`miDiv_${Name}`}>
          <div className="card__image-holder">
            <img
              className="card__image img-fluid"
              src={`https://picsum.photos/seed/${encodeURIComponent(Name)}/300/225`}
              alt={Name}
              width={300}
              height={225}
            />
          </div>
          <div className="card-title p-3">
            <h2>
              {Name}
              <br />
              <small>{idDept}</small>
              <br />
              <small className="nrc" id={NRC}>
                {NRC}
              </small>
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
});

export { SubjectCard };