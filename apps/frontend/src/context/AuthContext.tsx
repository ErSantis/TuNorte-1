import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { getSession, saveSession, clearSession } from "../services/session.service";

import { SessionType } from "../types/session.type";
import { StudentSessionType, StudentType } from "../types/student";


export const AuthContext = createContext<SessionType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<Omit<StudentType, "password">>({} as Omit<StudentType, "password">);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session: StudentSessionType = getSession()
    console.log("Sesión recuperada:", session);
    const storedToken = session?.token || null;
    const storedUser = session?.user || null;
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(storedUser);
      setIsAuthenticated(true);
      console.log("✅ Sesión cargada y autenticado");
    } else {
      console.log("❌ No se encontró sesión");
    }
    setLoading(false);
  }, []);
  


  const login = (session: StudentSessionType) => {

    saveSession(session); // Save the session data to localStorage);
    setUser(session.user);
    setToken(session.token);
    setIsAuthenticated(true); // Set authenticated state
  };

  const logout = () => {

    clearSession();
    setToken('');
    setUser({} as Omit<StudentType, "password">); // Set user to an empty object of the appropriate type
    setIsAuthenticated(false); // Reset authenticated state
  };

  return (
    <AuthContext.Provider value={{ token, user, isAuthenticated, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return context;
};


