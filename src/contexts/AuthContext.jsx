import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import React, { createContext, useContext, useEffect, useState } from "react";
  import { auth } from "../firebase";
  import { ADMINS } from "../utils/consts";
  
  const authContext = createContext();
  
  export function useAuthContext() {
    return useContext(authContext);
  }
  
  // todo -----------------------------------------------------------------------------
  
  function AuthContext({ children }) {
    const [user, setUser] = useState(true);
  
    async function register(email, password, displayName, photoURL) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, { displayName, photoURL });
      } catch (e) {
        console.log(e);
      }
    }
  
    async function login(email, password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (e) {
        console.log(e);
      }
    }
  
    async function logout() {
      try {
        await signOut(auth);
      } catch (e) {
        console.log(e);
      }
    }
  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        setUser(user);
      });
    }, []);
  
    function isAdmin() {
      if (!user) {
        return false;
      }
      return ADMINS.includes(user.email);
    }
  
    const value = {
      user,
      logout,
      login,
      register,
      isAdmin,
    };
    return <authContext.Provider value={value}>{children}</authContext.Provider>;
  }
  
  export default AuthContext;