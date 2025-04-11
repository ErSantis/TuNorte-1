export type StudentType = {
    idstudent: number;
    username: string;
    password: string;
    name: string;
    middlename?: string;
    lastname: string;
    email: string;
    dept_id: number;
};

export type StudentLogin = Pick<StudentType, "username" | "password">;

export type StudentSessionType = {
    // Student without password
    user: Omit<StudentType, "password">;
    token: string;
};

export type StudentCreate = Omit<StudentType, "idstudent">;

export type StudentUpdate = Partial<Omit<StudentType, "idstudent" | "password">>;

export type StudentDetails = Omit<StudentType, "password">;

