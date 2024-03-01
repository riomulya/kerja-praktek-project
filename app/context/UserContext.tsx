import { createContext, JSX, useContext, useState } from "react";

export interface UserInterface {
    email: string;
    uid: string;
}

export const InitialUserState: UserInterface = {
    email: "",
    uid: ""
}

const UserContext = createContext(InitialUserState);

export const useUser = () => {
    return useContext(UserContext);
}

export const UserProvider = (props: React.PropsWithChildren<{}>) => {
    const [userState, setUserState] = useState<UserInterface>(InitialUserState)

    const SetUser = (userCredential: UserInterface) => {
        setUserState({ ...userCredential })
    }

    const ResetUser = () => {
        setUserState(InitialUserState)
    }

    const valueCtx = { ...userState, SetUser, ResetUser };
    return <UserContext.Provider value={valueCtx} {...props} />
}
