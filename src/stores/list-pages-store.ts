import { create } from "zustand";

interface ModalStore {
    currentPage: number;
    totalPages: number;
    prevPage: () => void
    nextPage: () => void;
    setTotalPages(totalPages: number): void;
}

export const useListPageStore = create<ModalStore>((set) => ({
    currentPage: 1,
    totalPages: 0,
    prevPage: () => set((state) => ({
        currentPage: Math.max(1, state.currentPage - 1),
    })),
    nextPage: () => set((state) => ({
        currentPage: Math.min(state.totalPages, state.currentPage + 1),
    })),
    setTotalPages: (totalPages: number) => set({ totalPages }),
}));