import { findOneNoteService } from "@/services/notes/find-one-note.service";
import { useQuery } from "@tanstack/react-query";

export function UseGetOneNote(noteId: string) {
    return useQuery({
        queryKey: ['note', noteId],
        queryFn: async () => {
            return await findOneNoteService(noteId)
        },
        enabled: !!noteId
    })
}