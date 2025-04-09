import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  user: { name: string; lastname: string };
  logout: () => void;
}

export const Navbar = React.memo(({ user, logout }: NavbarProps) => {
  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bolder" to="#">
          Mis Asignaturas
        </Link>
        <span className="d-flex align-items-center gap-2">
          <span>Bienvenido/a {user.name} {user.lastname}</span>
          <button className="btn btn-link" onClick={handleLogout}>
            Salir
          </button>
        </span>
      </div>
    </nav>
  );
});