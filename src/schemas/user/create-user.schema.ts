import { z } from 'zod'

export const createUserSchema = z.object({
    name: z.string({
        message: 'Você precisa passar um nome!'
    })
        .min(1, "Você precisa passar um nome com pelo menos uma letra!")
    ,
    email: z.string({
        message: 'Você precisa passar um email!'
    }).email({
        message: 'Email inválido!'
    }).min(1, "Você precisa passar um email com pelo menos uma letra!"),
    password: z.string({
        message: 'Você precisa passar uma senha!'
    }).min(1, "Você precisa passar uma senha com pelo menos uma letra!")
})

export type CreateUserSchema = z.infer<typeof createUserSchema>