import { ICreateNote } from "@/models/entities/note.entity";
import { createNoteService } from "@/services/notes/create-note.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export function UserCreateNote() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (data: ICreateNote) => {
            const response = await createNoteService(data)

            return response
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["notes"] })
            toast.success("Nota criada com sucesso", {
                autoClose: 3000,
                position: "bottom-right"
            })
        },
        onError: (error) => {
            toast.error(error.message, {
                autoClose: 3000,
                position: "bottom-right"
            })
        }
    })

}