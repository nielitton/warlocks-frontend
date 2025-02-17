/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "../api";

export async function deleteNoteService(noteId: string) {
    console.log('Deleting note', noteId)
    try {
        const noteDeleted = await api.delete(`/notes/${noteId}`)
        return noteDeleted.data;
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || "Erro ao deletar nota!"

        throw new Error(errorMessage)
    }
}