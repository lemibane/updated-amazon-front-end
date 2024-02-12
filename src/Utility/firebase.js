import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdix527NEs3446aMcc2iAQuPwwPHtKSw0",
  authDomain: "front-endclone-620c7.firebaseapp.com",
  projectId: "front-endclone-620c7",
  storageBucket: "front-endclone-620c7.appspot.com",
  messagingSenderId: "621901251198",
  appId: "1:621901251198:web:07ad4ec7a77cdacf07ce2f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
