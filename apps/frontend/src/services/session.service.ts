const SESSION_KEY = "auth_token";

export const saveSession = (token: string) => {
    localStorage.setItem(SESSION_KEY, token);
};

export const getSession = () => {
    return localStorage.getItem(SESSION_KEY);
};

export const clearSession = () => {
    localStorage.removeItem(SESSION_KEY);
};
