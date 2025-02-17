import { User } from "@/models/entities/user.entity";
import { create } from "zustand";

interface AuthStore {
    token: string;
    expiresIn: string;
    user: User;
    setToken: (token: string) => void
    setExpiresIn: (expiresIn: string) => void
    removeToken: () => void
    setUser: (user: User) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
    user: {
        active: true,
        email: '',
        id: '',
        name: '',
        password: '',
    },
    token: '',
    expiresIn: '',
    setToken: (token) => set({ token }),
    setExpiresIn: (expiresIn) => set({ expiresIn }),
    removeToken: () => set({ token: '', expiresIn: '' }),
    setUser: (user) => set({ user }),
}))