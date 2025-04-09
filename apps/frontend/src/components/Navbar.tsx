import { Link } from 'react-router-dom';

export const Navbar = ({ user, logout }: { user: { name: string; lastname: string }; logout: () => void }) => {
  return (
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
  );
};