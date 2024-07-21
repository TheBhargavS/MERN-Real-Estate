// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "mern-estate-3141c.firebaseapp.com",
  projectId: "mern-estate-3141c",
  storageBucket: "mern-estate-3141c.appspot.com",
  messagingSenderId: "876571360437",
  appId: "1:876571360437:web:ce79bde0230069361992fc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);