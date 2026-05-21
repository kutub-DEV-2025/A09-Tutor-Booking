"use client";

import {
  createContext,
  useEffect,
  useState,
} from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import app from "@/firebase/firebase.config";

export const AuthContext =
  createContext(null);

const auth = getAuth(app);

const googleProvider =
  new GoogleAuthProvider();

const AuthProvider = ({
  children,
}) => {

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  /*
  ==============================
         CREATE USER
  ==============================
  */

  const createUser = (
    email,
    password
  ) => {

    setLoading(true);

    return createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  };


  const loginUser = (
    email,
    password
  ) => {

    setLoading(true);

    return signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  };


  const googleLogin = () => {

    setLoading(true);

    return signInWithPopup(
      auth,
      googleProvider
    );
  };


  const logoutUser = () => {

    setLoading(true);

    return signOut(auth);
  };

  const updateUser = (
    updatedData
  ) => {

    return updateProfile(
      auth.currentUser,
      updatedData
    );
  };


  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {

          setUser(currentUser);

          setLoading(false);
        }
      );

    return () => unsubscribe();

  }, []);

 

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    googleLogin,
    logoutUser,
    updateUser,
  };

  return (
    <AuthContext.Provider
      value={authInfo}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;