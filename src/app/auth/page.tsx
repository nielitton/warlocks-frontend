"use client"

import LoginForm from "@/components/forms/login-form"
import RegisterForm from "@/components/forms/register-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { motion } from "framer-motion"
import { useState } from "react"

const queryClient = new QueryClient()

export default function AuthPage() {
    const [activeTab, setActiveTab] = useState("login")

    return (
        <QueryClientProvider client={queryClient}>
            <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden"
                >
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="login">Login</TabsTrigger>
                            <TabsTrigger value="register">Register</TabsTrigger>
                        </TabsList>
                        <TabsContent value="login">
                            <LoginForm />
                        </TabsContent>
                        <TabsContent value="register">
                            <RegisterForm />
                        </TabsContent>
                    </Tabs>
                </motion.div>
            </div>
        </QueryClientProvider>
    )
}

