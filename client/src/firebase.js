// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "project-rwa-70f3c.firebaseapp.com",
  projectId: "project-rwa-70f3c",
  storageBucket: "project-rwa-70f3c.appspot.com",
  messagingSenderId: "1088965825927",
  appId: "1:1088965825927:web:2b00440f7c2d697cd1ef22"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);