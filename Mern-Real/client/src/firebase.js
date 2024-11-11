// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-state-d1422.firebaseapp.com",
  projectId: "mern-state-d1422",
  storageBucket: "mern-state-d1422.firebasestorage.app",
  messagingSenderId: "242995544805",
  appId: "1:242995544805:web:ad370910319cc8157a4a0c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);