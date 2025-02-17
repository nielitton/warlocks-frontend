import { deleteNoteService } from "@/services/notes/delete-note.service"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"

export function UseDeleteNote() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (id: string) => {
            const response = await deleteNoteService(id)

            return response
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["notes"] })
            toast.warning("Nota excluída com sucesso", {
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