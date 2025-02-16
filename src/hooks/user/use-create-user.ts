/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICreateUser } from "@/models/entities/user.entity";
import { createUserService } from "@/services/user/create-user.service";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
export function UseCreateUser() {
    return useMutation({
        mutationFn: async (dataUser: ICreateUser) => await createUserService(dataUser),
        onSuccess: () => toast.success("Usuário criado com sucesso", {
            autoClose: 3000,
            position: "bottom-right"
        }),
        onError: (error: any) => {
            toast.error(error.message, {
                autoClose: 3000,
                position: "bottom-right",
                data: error
            })
        }
    })
}