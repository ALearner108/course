import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";





const firebaseConfig = {
 
    apiKey: "AIzaSyCB5BNDGYSFGr5ru-LKJNzBERxM6hlZ9BQ",
    authDomain: "coursean-553f1.firebaseapp.com",
    databaseURL: "https://coursean-553f1-default-rtdb.firebaseio.com/",
    projectId: "coursean-553f1",
    storageBucket: "coursean-553f1.appspot.com",
    messagingSenderId: "1079878743457",
    appId: "1:1079878743457:web:d8b0d0ef9c0bdc748847e0",
    measurementId: "G-8DH8PFGBZ2"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export const db = getFirestore(app);

export default app;

const firestore = getFirestore(app);

export { auth, firestore };
