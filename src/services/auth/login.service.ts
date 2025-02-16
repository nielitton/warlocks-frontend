/* eslint-disable @typescript-eslint/no-explicit-any */
import { ILogin, ILoginResponse } from "@/models/entities/auth.entity";
import { api } from "../api";

export async function loginService(data: ILogin) {
    try {
        const response = await api.post<ILoginResponse>("/auth/login", data);

        return response.data;
    } catch (error: any) {
        const errorMessage = error.response?.data?.message

        throw new Error(errorMessage)
    }
}