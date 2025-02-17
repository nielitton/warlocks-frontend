/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICreateNote } from "@/models/entities/note.entity";
import { api } from "../api";

export async function createNoteService(data: ICreateNote) {
    try {
        const response = await api.post('/notes', data)

        return response.data
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || "Erro ao criar nota!"

        throw new Error(errorMessage)
    }
}