// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8t3jrb4H6pDYXsPpjUa_QdIenXozmS7c",
  authDomain: "dealership-636e5.firebaseapp.com",
  projectId: "dealership-636e5",
  storageBucket: "dealership-636e5.appspot.com",
  messagingSenderId: "433299197043",
  appId: "1:433299197043:web:fef0314ba78af3c2feae06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);