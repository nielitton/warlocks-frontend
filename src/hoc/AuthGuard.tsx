"use client"

import { setAuthToken } from "@/services/api"
import { getCookie } from "cookies-next"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"

export function AuthGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        const token = getCookie("token")
        setAuthToken(token ? token.toString() : null)
    }, [])

    useEffect(() => {
        const token = getCookie("token")

        if (token && (pathname === "/auth" || pathname === "/")) {
            router.push("/notes")
        } else if (!token && pathname !== "/auth" && pathname !== "/") {
            router.push("/auth")
        } else if (!token) {
            router.push("/auth")
        }
    }, [pathname, router])

    return <>{children}</>
}
