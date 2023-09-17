// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, User} from "@firebase/auth";
import {getFunctions} from "@firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6ys2QGcTo-XWKecV5syxVlMCQRLAFLUg",
    authDomain: "pm-yt-clone.firebaseapp.com",
    projectId: "pm-yt-clone",
    storageBucket: "pm-yt-clone.appspot.com",
    messagingSenderId: "53259979048",
    appId: "1:53259979048:web:0aedb78731f8e8845fa81d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const functions = getFunctions();

export function signInWithGoogle() {
    return signInWithPopup(auth, new GoogleAuthProvider());
}

export function signOut() {
    return auth.signOut();
}

export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
}