/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICreateUser, User } from "@/models/entities/user.entity";
import { api } from "../api";

export async function createUserService(data: ICreateUser) {
    try {
        const response = await api.post<User>("/auth/register", data);

        return response.data;
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || "Erro ao criar usuário!"

        throw new Error(errorMessage)
    }
}