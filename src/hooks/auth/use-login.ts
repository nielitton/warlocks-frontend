/* eslint-disable @typescript-eslint/no-explicit-any */
import { ILogin } from "@/models/entities/auth.entity"
import { loginService } from "@/services/auth/login.service"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"

export function UseLogin() {
    return useMutation({
        mutationFn: async (dataLogin: ILogin) => await loginService(dataLogin),
        onSuccess: () => toast.success("Logado com sucesso", {
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