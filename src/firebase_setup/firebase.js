// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsLz7nyWX7hqyldn9LxfoVVfO5IE8W-eM",
  authDomain: "akshat-kumar-6f399.firebaseapp.com",
  projectId: "akshat-kumar-6f399",
  storageBucket: "akshat-kumar-6f399.appspot.com",
  messagingSenderId: "828765606842",
  appId: "1:828765606842:web:46bb6297b37c29a7664383",
  measurementId: "G-MWZK32NPRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);