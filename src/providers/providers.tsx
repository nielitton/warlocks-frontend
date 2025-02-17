'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const queryClient = new QueryClient()
export function Providers({ children }: { children: React.ReactNode }) {

    const router = useRouter()

    useEffect(() => {
        const token = getCookie("token")
        if (token) {
            router.push("/notes")
        } else {
            router.push("/auth")
        }

        return () => {
            // Clean up
        }
    }, [])

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}