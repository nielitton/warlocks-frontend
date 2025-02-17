/* eslint-disable @typescript-eslint/no-explicit-any */
import { ILogin } from "@/models/entities/auth.entity"
import { setAuthToken } from "@/services/api"
import { loginService } from "@/services/auth/login.service"
import { useAuthStore } from "@/stores/auth-store"
import { useMutation } from "@tanstack/react-query"
import { setCookie } from "cookies-next/client"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"

export function UseLogin() {
    const { setToken, setUser } = useAuthStore()
    const router = useRouter()

    return useMutation({
        mutationFn: async (dataLogin: ILogin) => {
            const response = await loginService(dataLogin)
            setToken(response.token)
            setUser(response.user)

            const expires = response.expires_in.replace(/[a-zA-Z]/g, "")
            const dateToExpiresConfig = new Date(Date.now() + Number(expires) * 1000)

            setCookie("userId", response.user.id, {
                expires: dateToExpiresConfig,
                path: "/",
                sameSite: "strict"
            })
            setCookie("token", response.token, {
                expires: dateToExpiresConfig,
                path: "/",
                sameSite: "strict"
            })

            setAuthToken(response.token)
            return response
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