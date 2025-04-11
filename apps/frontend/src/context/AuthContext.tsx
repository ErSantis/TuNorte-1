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

  /* The `useEffect` hook in the provided code snippet is responsible for handling the initial loading
  of the user session data when the `AuthProvider` component is mounted. Here's a breakdown of what
  it does: */
  useEffect(() => {
    const session: StudentSessionType = getSession()
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
    setUser(session.user); // Set user data
    setToken(session.token); // Set token data
    setIsAuthenticated(true); // Set authenticated state
  };

  const logout = () => {
    clearSession(); // Clear the session data from localStorage
    setToken(''); // Reset token data
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


