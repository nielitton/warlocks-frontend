import { create } from "zustand";

interface AuthStore {
    token: string;
    expiresIn: string;
    setToken: (token: string) => void
    setExpiresIn: (expiresIn: string) => void
}

export const useAuthStore = create<AuthStore>(() => ({
    token: '',
    expiresIn: '',
    setToken: () => (token: string) => ({ state: token }),
    setExpiresIn: () => (expiresIn: string) => ({ state: expiresIn })
}))