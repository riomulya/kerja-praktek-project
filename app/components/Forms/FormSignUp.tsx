"use client"

import React, { useRef, useState } from 'react';
import { SignUp } from '../../auth/firebase';
import Spinner from '../Utils/Spinner';
import { AlertSnackBar } from '../Utils/AlertSnackBar';

export const FormSignUp = ({ toSignIn }: { toSignIn: () => void }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState({ error: false, message: "" })
    // const [passwordIsNotSame, setpasswordIsNotSame] = useState(false)

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
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

    console.log("Form Data : " + formData.password);
    console.log("Form Confirm : " + formData.confirmPassword);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (formData.password.length < 8 && formData.confirmPassword.length < 8) {
                setIsError({ error: true, message: "Panjang password kurang dari 8" })
                return;
            }
            if (formData.password !== formData.confirmPassword) {
                setIsError({ error: true, message: "Password tidak sama" })
                return;
            }

            setIsLoading(true);
            await SignUp(formData.email, formData.password);
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
                        Daftar Akun
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
                        <div>
                            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} id="passwordConfirm" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <button type="submit" className="w-full border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
                    </form>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Sudah Punya Akun? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={toSignIn}>Masuk</a>
                    </p>
                </div>
            </div>
            <Spinner open={isLoading} />
            <AlertSnackBar open={isError.error} handleClose={handleCloseSnack} duration={3000} type={"error"} message={isError.message} />

            {/* <AlertSnackBar open={passwordIsNotSame} handleClose={handleCloseSnack} duration={3000} type={"error"} message={"Password tidak sama"} /> */}
        </>
    )
}
