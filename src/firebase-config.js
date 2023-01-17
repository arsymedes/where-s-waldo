// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnGXk_jjikphojqm-XtdN1llgzjcXVfNw",
  authDomain: "wheres-waldo-c54fb.firebaseapp.com",
  projectId: "wheres-waldo-c54fb",
  storageBucket: "wheres-waldo-c54fb.appspot.com",
  messagingSenderId: "6223401377",
  appId: "1:6223401377:web:eab89c13eefe61a979bbe0",
  measurementId: "G-94ELCG33KZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
