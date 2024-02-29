// import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { FormAuth } from '../components/FormAuth';


const SignIn = () => {

    const { user, googleSignIn, logOut } = UserAuth();

    const handleGoogleSign = async () => {
        try {
            await googleSignIn()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <FormAuth handleClick={handleGoogleSign} />
        </>
    )
}

export default SignIn;