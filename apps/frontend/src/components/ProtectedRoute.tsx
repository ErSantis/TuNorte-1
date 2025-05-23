// components/PrivateRoute.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { ReactNode } from "react";

export const PrivateRoute = ({ children }: { children: ReactNode }) => {
    
    const { token } = useAuth();
   
    if (!token) {
        // Si no hay token, redirige al login
        return <Navigate to="/" replace />;
    }

    // Si hay token, permite acceder
    return children;
};
