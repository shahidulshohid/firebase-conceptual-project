// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRnafbXEgvIAJHKf5VIMY5J9sIjNuVKy4",
  authDomain: "fir-conceptual-project-ae036.firebaseapp.com",
  projectId: "fir-conceptual-project-ae036",
  storageBucket: "fir-conceptual-project-ae036.firebasestorage.app",
  messagingSenderId: "45159481328",
  appId: "1:45159481328:web:65ecf2d7f1b6867ca5e735"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);