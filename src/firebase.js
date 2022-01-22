// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnQuMXbCVVniDObMne896rP9jpGzJ4aVU",
    authDomain: "habibi-food2.firebaseapp.com",
    projectId: "habibi-food2",
    storageBucket: "habibi-food2.appspot.com",
    messagingSenderId: "392300837339",
    appId: "1:392300837339:web:3c75dfb0d1d51563c9cffe",
    measurementId: "G-FXB73SDNEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;