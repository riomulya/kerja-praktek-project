import { create } from 'zustand';

interface UserInterface {
    email: string | null;
    uid: string | null;
}

interface UserStore {
    user: UserInterface;
    SetUser: (user: UserInterface) => void;
    resetUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
    user: { email: null, uid: null },
    SetUser: (user) => set({ user }),
    resetUser: () => set({ user: { email: null, uid: null } }),
}));
