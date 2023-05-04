import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const GoogleProvider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, GoogleProvider);
  };

  const signInWithGithub = () => {
    setLoading(true)
    return signInWithPopup(auth, GithubProvider);
  };

  const signInWithEmail = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createUserWithEmail = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    setLoading(true)
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false); 
    });
    return () => unsubscribe();
  }, []);

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  };

  const authInfo = {
    user,
    loading,
    signInWithGoogle,
    signInWithGithub,
    signInWithEmail,
    createUserWithEmail,
    logOutUser,
    resetPassword
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
