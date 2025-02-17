import { User } from "./user.entity";

export interface ILogin {
    email: string;
    password: string;
}

export interface ILoginResponse {
    token: string;
    expires_in: string;
    user: User;
}