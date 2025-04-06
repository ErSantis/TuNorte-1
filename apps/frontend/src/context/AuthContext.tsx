import { createContext, useState, useEffect, ReactNode } from "react";
import { getSession, saveSession, clearSession } from "../services/session.service";

import { SessionType } from "../types/session.type";
import { StudentSessionType, StudentType } from "../types/student";


export const AuthContext = createContext<SessionType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string>("");

  const [user, setUser] = useState<Omit<StudentType, "password">>({} as Omit<StudentType, "password">);
  useEffect(() => {
    console.log("AuthProvider useEffect called");
    const session: StudentSessionType = getSession();
    const storedToken = session?.token || null;
    const storedUser = session?.user || null;
    if (storedToken && storedUser) {

      setToken(storedToken);
      setUser(storedUser);
    }
  }, []);

  const login = (newUser: StudentSessionType) => {

    saveSession(newUser); // Save the session data to localStorage);
    setUser(newUser.user);
    setToken(newUser.token);
  };

  const logout = () => {
    clearSession();
    setToken('');
    setUser({} as Omit<StudentType, "password">); // Set user to an empty object of the appropriate type
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

