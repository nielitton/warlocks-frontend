/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "../api";

export async function findOneNoteService(noteId: string) {
    try {
        const response = (await api.get(`/notes/${noteId}`)).data

        return response;
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || "Erro ao buscar nota!"

        throw new Error(errorMessage)
    }
}