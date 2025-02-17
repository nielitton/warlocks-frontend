import { useAuthStore } from "@/stores/auth-store"
import { deleteCookie } from "cookies-next"

export function UseLogout() {
    const { removeToken } = useAuthStore()

    const logout = () => {
        removeToken()
        deleteCookie('token')
    }

    return { logout }

}