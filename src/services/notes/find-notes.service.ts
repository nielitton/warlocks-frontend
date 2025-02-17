/* eslint-disable @typescript-eslint/no-explicit-any */
import { INotesByUserResponse } from "@/models/entities/note.entity";
import { api } from "../api";

export async function getNotesService(userId: string | undefined) {
    try {
        const response = await api.get<INotesByUserResponse>(`/notes/user/${userId}`)

        return response.data;
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || "Erro ao buscar notas!"

        throw new Error(errorMessage)
    }
}