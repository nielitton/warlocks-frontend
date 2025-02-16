import { z } from "zod";

export const loginSchema = z.object({
    email: z.string({
        message: 'Você precisa passar um email!'
    }).email({
        message: 'Email inválido!'
    }).min(1, "Você precisa passar um email com pelo menos uma letra!"),
    password: z.string({
        message: 'Você precisa passar uma senha!'
    }).min(1, "Você precisa passar uma senha!")
})

export type LoginSchema = z.infer<typeof loginSchema> 