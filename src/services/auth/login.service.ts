/* eslint-disable @typescript-eslint/no-explicit-any */
import { ILogin } from "@/models/entities/auth.entity";
import { User } from "@/models/entities/user.entity";
import { toast } from "react-toastify";
import { api } from "../api";

export async function createUserService(data: ILogin) {
    try {
        const response = await api.post<User>("/auth/login", data);

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