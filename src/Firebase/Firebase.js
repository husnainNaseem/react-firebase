// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage, ref } from "firebase/storage";
import { auth, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3OqpLjSGoqBwfiwpncindvEo7LZXOsb8",
  authDomain: "react-firebase-a6c13.firebaseapp.com",
  projectId: "react-firebase-a6c13",
  storageBucket: "react-firebase-a6c13.appspot.com",
  messagingSenderId: "764578877148",
  appId: "1:764578877148:web:8c6213978eb0cfdbdbae19"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase)
export const storage = getStorage(firebase);
export const storageRef = ref(storage);
export const auth = firebase.auth()