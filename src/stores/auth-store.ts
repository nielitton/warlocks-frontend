import { create } from "zustand";

interface AuthStore {
    token: string;
    expiresIn: string;
    setToken: (token: string) => void
    setExpiresIn: (expiresIn: string) => void
    removeToken: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
    token: '',
    expiresIn: '',
    setToken: (token) => set({ token }),
    setExpiresIn: (expiresIn) => set({ expiresIn }),
    removeToken: () => set({ token: '', expiresIn: '' }),
}))