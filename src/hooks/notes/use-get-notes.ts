import { getNotesService } from "@/services/notes/find-notes.service";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";

export function UseGetNotes(page: number) {
    return useQuery({
        queryKey: ["notes", page], // Inclui o número da página na queryKey
        queryFn: async () => {
            const userId = getCookie("userId")?.toString();
            if (!userId) throw new Error("Usuário não autenticado");

            return await getNotesService(userId, page);
        },
    });
}