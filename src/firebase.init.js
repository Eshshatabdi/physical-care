// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWswUQNy1m5iROqYDkDeCK0zhMsCrN83U",
    authDomain: "authentication-assignmen-7c87c.firebaseapp.com",
    projectId: "authentication-assignmen-7c87c",
    storageBucket: "authentication-assignmen-7c87c.appspot.com",
    messagingSenderId: "679490701622",
    appId: "1:679490701622:web:a6215c92c59fc5bff44b97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;