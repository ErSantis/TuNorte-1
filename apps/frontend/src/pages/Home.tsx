// src/pages/Home.tsx
import { useAuth } from '../hooks/useAuth';
import { useGetSubjects } from "../hooks/useGetSubjects";
import { Link } from 'react-router-dom'; // Added import for Link
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';

export const Home = () => {

  const { user, logout } = useAuth();

  const { data, isLoading, error } = useGetSubjects(user.idstudent);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading additional data</div>;

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bolder" to="#">
            Mis Asignaturas
          </Link>
          <span className="d-flex align-items-center gap-2">
            <span>Bienvenido/a {user.name} {user.lastname}</span>
            <button className="btn btn-link" onClick={logout}>
              Salir
            </button>
          </span>
        </div>
      </nav>

      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-4">
          {data!.map((subject) => (
            <div className="col mb-4" key={subject.NRC}>
              <Link to={`/subject/${subject.NRC}`} className="card-link"> {/* Wrap card with Link */}
                <div className="card hover-animation" id={`miDiv_${subject.Name}`}> {/* Added hover-animation class */}
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
          ))}
        </div>
      </div>
    </>
  );
};
