import { create } from 'zustand';
import { persist } from "zustand/middleware"

interface UserInterface {
    email: Partial<string | null>;
    uid: Partial<string | null>;
}

interface UserStore {
    user: UserInterface;
    SetUser: (user: UserInterface) => void;
    ResetUser: () => void;
}

export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            user: { email: "", uid: "" },
            SetUser: (user) => set({ user }),
            ResetUser: () => set({ user: { email: "", uid: "" } }),
        }), {
        name: "userStorage"
    }
    )
);

