import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UseLogin } from "@/hooks/auth/use-login"
import { loginSchema, LoginSchema } from "@/schemas/user/login.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, LogIn } from "lucide-react"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"

export default function LoginForm() {
    const { mutate: loginMutate, isPending } = UseLogin()

    const form = useForm<LoginSchema>({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: zodResolver(loginSchema)
    })

    const handleSubmit = (data: LoginSchema) => {
        loginMutate(data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 p-6">
                <div className="space-y-2">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        value={field.value}
                                        onChange={field.onChange}
                                        placeholder="Digite seu email"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="space-y-2">
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor="password">Senha</FormLabel>
                                <FormControl>
                                    <Input
                                        value={field.value}
                                        onChange={field.onChange}
                                        placeholder="Digite sua senha"
                                        type="password"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit" className="w-full bg-warlocks-blue hover:bg-warlocks-blue/90 text-white">
                    {isPending ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Logging in...
                        </>
                    ) : (
                        <>
                            <LogIn className="mr-2 h-4 w-4" /> Login
                        </>
                    )}
                </Button>
            </form>
        </Form>
    )
}

