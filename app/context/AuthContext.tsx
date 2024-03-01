"use client"

import { CircularProgress } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { Authentication } from "../auth/firebase";
import { useUser, UserInterface } from "./UserContext"


const AuthStateChangeProvider = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true)
    const { SetUser } = useUser();

    const InitiateAuthStateChange = () => {
        Authentication().onAuthStateChanged((user) => {
            if (user) {
                console.log("user is authenticated")
                console.log({ user });
                SetUser({ email: user.email, uid: user.uid })
            } else {
                console.log("user is not authenticated")
            }
            setIsLoading(false);
        })
    }
    useEffect(() => {
        InitiateAuthStateChange()
    }, [])


    return isLoading ? <CircularProgress /> : <>{children}</>
}



export default AuthStateChangeProvider;