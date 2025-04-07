import { Link } from 'react-router-dom';

export const SubjectCard = ({ subject }: { subject: { Name: string; idDept: string; NRC: string } }) => {
  return (
    <div className="col mb-4" key={subject.NRC}>
      <Link to={`/subject/${subject.NRC}`} className="card-link">
        <div className="card hover-animation" id={`miDiv_${subject.Name}`}>
          <div className="card__image-holder">
            <img
              className="card__image img-fluid"
              src={`https://picsum.photos/seed/${encodeURIComponent(subject.Name)}/300/225`}
              alt={subject.Name}
              width={300}
              height={225}
            />
          </div>
          <div className="card-title p-3">
            <h2>
              {subject.Name}
              <br />
              <small>{subject.idDept}</small>
              <br />
              <small className="nrc" id={subject.NRC}>
                {subject.NRC}
              </small>
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};