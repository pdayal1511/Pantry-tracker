// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbjjU-ugx7T9WUCJX58YGJjcLowNI-O0Y",
  authDomain: "pantry-tracker-1024d.firebaseapp.com",
  projectId: "pantry-tracker-1024d",
  storageBucket: "pantry-tracker-1024d.appspot.com",
  messagingSenderId: "912535932811",
  appId: "1:912535932811:web:9eaa831598c78d5dbe698e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);