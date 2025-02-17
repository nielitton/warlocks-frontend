/* eslint-disable @typescript-eslint/no-explicit-any */
import { INoteUpdateResponse, IUpdateNote } from "@/models/entities/note.entity";
import { api } from "../api";

export async function updateNoteService(data: IUpdateNote, noteId: string) {
    try {
        const response = await api.patch<INoteUpdateResponse>(`/notes/${noteId}`, data);
        return response.data;
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || "Erro ao editar nota!"

        throw new Error(errorMessage)
    }
}