import { ICreateUser, User } from "@/models/entities/user.entity";
import { toast } from "react-toastify";
import { api } from "../api";

export async function createUserService(data: ICreateUser) {
    return await api.post<User>("/users", data).then((res) => {
        toast("Usuário criado com sucesso", {
            type: "success",
            autoClose: 3000,
            position: "bottom-right",
            data: res
        })
    }).catch(error => {
        console.log(error);
    })
}