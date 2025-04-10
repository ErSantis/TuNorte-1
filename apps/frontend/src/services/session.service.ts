
import { StudentSessionType} from "../types/student";

const SESSION_KEY = "auth_session";

export const saveSession = (session: StudentSessionType) => {
    const sessionData = JSON.stringify(session);
    localStorage.setItem(SESSION_KEY, sessionData);
};

export const getSession = () => {
    const sessionData = localStorage.getItem(SESSION_KEY);
    if (process.env.NODE_ENV !== "production") {
        console.log("Sesión recuperada:", sessionData ? JSON.parse(sessionData) : null);
    }
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
