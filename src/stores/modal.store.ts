import { create } from "zustand";

interface ModalStore {
    modalIsOpen: boolean;
    modalType: "edit" | "create"
    noteId: string;
    setModalIsOpen: (isOpen: boolean) => void
    setModalType: (type: "edit" | "create") => void;
    setNoteId: (id: string) => void;
}

export const useModalStore = create<ModalStore>((set) => ({
    modalIsOpen: false,
    modalType: "create",
    noteId: '',
    setModalIsOpen: (isOpen) => set({ modalIsOpen: isOpen }),
    setModalType: (type: "edit" | "create") => set({ modalType: type }),
    setNoteId: (id) => set({ noteId: id }),
}));