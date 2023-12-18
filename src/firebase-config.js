// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyu6Ik5ewiq-WHHghtyt6pARsj6C5u8lc",
  authDomain: "powerhousefitness-b58b9.firebaseapp.com",
  projectId: "powerhousefitness-b58b9",
  storageBucket: "powerhousefitness-b58b9.appspot.com",
  messagingSenderId: "1037269141501",
  appId: "1:1037269141501:web:86fe1d8fc34271c05b3b94",
  measurementId: "G-6D0Z9ETD2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authenication = getAuth(app);