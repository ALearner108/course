import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";
  import React, { createContext, useContext, useEffect, useState } from "react";
  import { auth } from "../Firebase-config";
  export const AuthContext = createContext();
  
  export default function AuthProvider({ children }) {
    const [currentUser, setcurrentUser] = useState();
  
    function signup(email, password) {
      return createUserWithEmailAndPassword(auth, email, password);
    }
    function login(email, password) {
      return signInWithEmailAndPassword(auth, email, password);
    }
    function logout() {
      return auth.signOut();
    }
    useEffect(() => {
      const ubsubscribe = auth.onAuthStateChanged((user) => {
        setcurrentUser(user);
        return ubsubscribe;
      });
    }, []);
  
    const value = {
      currentUser,
      login,
      signup,
      logout,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  }
  