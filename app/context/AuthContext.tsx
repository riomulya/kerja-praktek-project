"use client"

import { auth } from "../auth/firebase";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import {
    useContext,
    createContext,
    ReactNode,
    useState,
    useEffect
} from "react";


// Buat context baru
const AuthContext = createContext<any>(null);

// Buat provider untuk konteks
export const AuthContextProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState(null)

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => unsubscribe()

    }, [user])


    return (
        // Berikan value prop dengan nilai yang ingin Anda bagikan
        <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};


export const UserAuth = () => {
    return useContext(AuthContext)
}
