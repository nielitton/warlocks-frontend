import { Note } from "@/models/entities/note.entity";
import { create } from "zustand";

interface NoteStore {
    notes: Note[];
    setNotes: (notes: Note[]) => void;

}

export const useNoteStore = create<NoteStore>((set) => ({
    notes: [],
    setNotes: (notes: Note[]) => set({ notes }),
}))