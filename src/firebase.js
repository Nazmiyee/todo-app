// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaulqEnXULjPJI624P4HjXQGuWBGvJqLg",
  authDomain: "fir-1f050.firebaseapp.com",
  projectId: "fir-1f050",
  storageBucket: "fir-1f050.appspot.com",
  messagingSenderId: "607249284088",
  appId: "1:607249284088:web:31e6d8b17c68b9d395f40d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);