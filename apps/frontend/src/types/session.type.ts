import {StudentSessionType,StudentType } from "./student";

export interface SessionType {
  token: string;
  user: Omit<StudentType, "password">;
  login: (user: StudentSessionType) => void;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
}
