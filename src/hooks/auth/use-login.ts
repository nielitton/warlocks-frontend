/* eslint-disable @typescript-eslint/no-explicit-any */
import { ILogin } from "@/models/entities/auth.entity"
import { loginService } from "@/services/auth/login.service"
import { useAuthStore } from "@/stores/auth-store"
import { useMutation } from "@tanstack/react-query"
import { setCookie } from "cookies-next/client"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

export function UseLogin() {
    const { setToken } = useAuthStore()
    const router = useRouter()

    return useMutation({
        mutationFn: async (dataLogin: ILogin) => {
            const response = await loginService(dataLogin)
            setToken(response.token)

            const expires = response.expires_in.replace(/[a-zA-Z]/g, "")

            setCookie("token", response.token, {
                expires: new Date(Date.now() + Number(expires) * 1000),
                path: "/",
                sameSite: "strict"
            })
        },
        onSuccess: () => {
            toast.success("Logado com sucesso", {
                autoClose: 3000,
                position: "bottom-right"
            })
            router.push("/notes")
        },
        onError: (error: any) => {
            toast.error(error.message, {
                autoClose: 3000,
                position: "bottom-right",
                data: error
            })
        }
    })
}