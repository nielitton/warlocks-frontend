import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UseCreateUser } from "@/hooks/user/use-create-user"
import { createUserSchema, CreateUserSchema } from "@/schemas/user/create-user.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { UserPlus } from "lucide-react"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"

export default function RegisterForm() {
    const { mutate: createUserMutate } = UseCreateUser()

    const form = useForm<CreateUserSchema>({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        },
        resolver: zodResolver(createUserSchema)
    })

    const handleSubmit = (data: CreateUserSchema) => {
        createUserMutate(data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 p-6">
                <div className="space-y-2">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel htmlFor="name">Nome</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        value={field.value}
                                        onChange={field.onChange}
                                        placeholder="Digite seu nome"
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
                                        {...field}
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
                <Button type="submit" className="w-full bg-warlocks-blue hover:bg-warlocks-blue/90">
                    <UserPlus className="mr-2 h-4 w-4" /> Registrar
                </Button>
            </form>
        </Form>
    )
}

