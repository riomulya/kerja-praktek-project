"use client"

import { createContext, ReactNode, useContext, useState } from "react";

export interface UserInterface {
    email: string;
    uid: string;
}

interface UserContextType {
    user: UserInterface;
    setUser: (user: UserInterface) => void;
    resetUser: () => void;
}

const UserContext = createContext<UserContextType>({
    user: { email: "", uid: "" },
    setUser: () => { },
    resetUser: () => { }
});

export const useUser = () => {
    return useContext(UserContext);
}

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [userState, setUserState] = useState<UserInterface>({ email: "", uid: "" });

    const setUser = (userCredential: UserInterface) => {
        setUserState(userCredential);
        // console.log({ userState })
    }

    const resetUser = () => {
        setUserState({ email: "", uid: "" });
    }

    const value = { user: userState, setUser, resetUser };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}
