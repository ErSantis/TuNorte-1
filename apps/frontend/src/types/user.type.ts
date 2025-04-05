export type  User =  {
    user_id: number;
    name: string;
    lastname: string;
    user: string;
    password: string;
    dept_id: number;

}

export type UserLogin = Pick<User, "user" | "password">; 

export type UserSession = Omit<User, "password"> & {
    token: string;
};
