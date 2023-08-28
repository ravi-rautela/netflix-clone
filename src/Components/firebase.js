// import {firebase} from "firebase/app"
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBRNHv0rA99W16KxOAc4yAao9aTM00U5Do",
    authDomain: "netflix-clone-974a9.firebaseapp.com",
    projectId: "netflix-clone-974a9",
    storageBucket: "netflix-clone-974a9.appspot.com",
    messagingSenderId: "217135755023",
    appId: "1:217135755023:web:ad886624f569fdff50987a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
