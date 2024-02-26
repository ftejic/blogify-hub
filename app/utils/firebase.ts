// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "blogifyhub.firebaseapp.com",
    projectId: "blogifyhub",
    storageBucket: "blogifyhub.appspot.com",
    messagingSenderId: "639808688986",
    appId: "1:639808688986:web:7707a16d1d21264fbc5963"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);