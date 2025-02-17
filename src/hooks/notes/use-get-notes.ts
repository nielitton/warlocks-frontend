import { getNotesService } from "@/services/notes/find-notes.service";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";

export function UseGetNotes() {
    return useQuery({
        queryKey: ["notes"],
        queryFn: async () => {
            const userId = getCookie("userId")?.toString()

            const response = await getNotesService(userId)

            return response
        },
        staleTime: 0
    })
}