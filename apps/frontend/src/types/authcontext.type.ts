import { UserSession } from "./user.type";

export interface AuthContextType {
    token: string | null;
    user: UserSession | null;
    login: (token: string, user: any) => void;
    logout: () => void;
  }
  