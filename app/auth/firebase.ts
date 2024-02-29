// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAS215mXnRpBlUYR9FFlZjU-DmVz_t6m0o",
    authDomain: "kp-project-1a945.firebaseapp.com",
    projectId: "kp-project-1a945",
    storageBucket: "kp-project-1a945.appspot.com",
    messagingSenderId: "5803321581",
    appId: "1:5803321581:web:f491b10eb68549f4f0c4e4",
    measurementId: "G-KQE7GKN235"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
