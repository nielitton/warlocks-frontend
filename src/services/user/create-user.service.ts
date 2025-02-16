/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICreateUser, User } from "@/models/entities/user.entity";
import { toast } from "react-toastify";
import { api } from "../api";

export async function createUserService(data: ICreateUser) {
    try {
        const response = await api.post<User>("/auth/register", data);

        toast.success("Usuário criado com sucesso", {
            autoClose: 3000,
            position: "bottom-right",
        });

        return response.data;
    } catch (error: any) {
        toast.error(error.response.data.message, {
            autoClose: 3000,
            position: "bottom-right",
            data: error
        });
    }
}