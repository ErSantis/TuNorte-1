
import { StudentSessionType} from "../types/student";

const SESSION_KEY = "auth_session";

export const saveSession = (user: StudentSessionType) => {
    const sessionData = JSON.stringify({ user });
    localStorage.setItem(SESSION_KEY, sessionData);
};

export const getSession = () => {
    const sessionData = localStorage.getItem(SESSION_KEY);
    return sessionData ? JSON.parse(sessionData) : null;
};

export const getSessionUser = () => {
    const session = getSession();
    return session ? session.user : null;
};

export const getSessionToken = () => {
    const session = getSession();
    return session ? session.token : null;
}

export const clearSession = () => {
    localStorage.removeItem(SESSION_KEY);
};
