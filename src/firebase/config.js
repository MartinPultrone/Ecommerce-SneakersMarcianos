// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtRaBqQhb58kuPRy8FFW-DdxEPZbpVqk0",
  authDomain: "ecommercesneakers.firebaseapp.com",
  projectId: "ecommercesneakers",
  storageBucket: "ecommercesneakers.appspot.com",
  messagingSenderId: "421407330746",
  appId: "1:421407330746:web:d9f15bf9269069cf920d83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}