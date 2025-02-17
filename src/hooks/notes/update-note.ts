import { IUpdateNote } from "@/models/entities/note.entity";
import { updateNoteService } from "@/services/notes/update-notes.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export function UseUpdateNote(noteId: string) {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (data: IUpdateNote) => {
            return await updateNoteService(data, noteId)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['notes'] })

            toast.success("Nota atualizada com sucesso", {
                autoClose: 3000,
                position: "bottom-right"
            })
        },
        onError: (error) => {
            toast.error(error.message, {
                autoClose: 3000,
                position: "bottom-right",
            })
        }
    })
}