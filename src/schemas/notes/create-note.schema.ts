import { z } from "zod";

export const createNoteSchema = z.object({
    title: z.string({ message: 'Você precisa passar um titulo!' }).min(1, "Você precisa passar pelo menos uma letra!"),
    content: z.string({ message: 'Você precisa passar um conteúdo!' }).min(1, "Você precisa passar pelo menos uma letra!")
})

export type CreateNoteSchema = z.infer<typeof createNoteSchema>