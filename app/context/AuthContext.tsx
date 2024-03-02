"use client"

import { CircularProgress } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { Authentication } from "../auth/firebase";
import { useUser } from "./UserContext";
import { useUserStore } from "../hooks/store/storeUser";
import Spinner from "../components/Spinner";

const AuthStateChangeProvider = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true);
    const { setUser } = useUser();
    const { SetUser, resetUser, user: userGlobal } = useUserStore();

    useEffect(() => {
        const unsubscribe = Authentication().onAuthStateChanged((user) => {
            if (user) {
                console.log("User is authenticated");
                console.log({ user });
                setUser({ email: user.email, uid: user.uid });
                SetUser({ email: user.email, uid: user.uid });
                console.log({ userGlobal })
            } else {
                console.log("User is not authenticated");
                resetUser(); // Clear user store state
            }
            setIsLoading(false);
        });

        // Cleanup function to unsubscribe from the listener when component unmounts
        return () => unsubscribe();
    }, [setUser, useUserStore]); // Added setUser and setUserStore as dependencies

    return isLoading ? <Spinner open={true} /> : <>{children}</>;
    // return <>{children}</>;
};

export default AuthStateChangeProvider;
