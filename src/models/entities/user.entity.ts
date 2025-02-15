export interface IUser {
    id: number;
    name: string;
    email: string;
}

export interface ICreateUser {
    name: string;
    email: string;
    password: string;
}

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    active: boolean;
}