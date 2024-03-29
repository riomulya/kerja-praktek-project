"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { GoogleSignIn, SignIn } from '../../auth/firebase';
import Spinner from '../Utils/Spinner';
import { AlertSnackBar } from '../Utils/AlertSnackBar';

export const FormAuth = ({ toSignUp }: { toSignUp: () => void }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState({ error: false, message: "" })

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCloseSnack = () => {
        setIsError({ error: false, message: "" })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await SignIn(formData.email, formData.password);
        } catch (error) {
            console.log(error)
            setIsError({ error: true, message: "Invalid Credential" })
        }
        setIsLoading(false);
    };


    const handleGoogleSignIn = async () => {
        setIsLoading(true);
        try {
            await GoogleSignIn();
        } catch (error) {
            console.log(error)
            setIsError({ error: true, message: "Invalid Credential" })
        }
        setIsLoading(false);
    };

    return (
        <>
            <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Masuk
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        {/* <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 light:text-white">Forgot password?</a>
                        </div> */}
                        <button type="submit" className="w-full border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                    </form>
                    <button
                        className="w-full h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                        onClick={handleGoogleSignIn}
                    >
                        <div className="relative flex items-center space-x-4 justify-center">
                            <Image src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" height={400} width={400} />
                            <a className="block w-max font-semibold tracking-wide text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</a>
                        </div>
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Belum Punya Akun? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={toSignUp}>Daftar</a>
                    </p>
                </div>
            </div>
            <Spinner open={isLoading} />
            <AlertSnackBar open={isError.error} handleClose={handleCloseSnack} duration={3000} type={"error"} message={isError.message} />
        </>
        // </div >
        // </section >
    )
}
