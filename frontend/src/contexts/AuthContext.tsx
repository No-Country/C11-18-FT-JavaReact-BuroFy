"use client";
import { ContextAuth, Status } from "@/interfaces/auth";
import { firebase_auth } from "@/lib/firebase";

import { Dispatch, SetStateAction, createContext, useContext, useState, useEffect } from "react";

const emptyContext = {};

const AuthContext = createContext(emptyContext as ContextAuth);

export function useAuth(): ContextAuth {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [statusAuth, setStatusAuth] = useState<Status>("checking");
  console.log(statusAuth);
  useEffect(() => {
    const unsubsrcibe = firebase_auth.onAuthStateChanged((user) => {
      setStatusAuth("authenticated");
    });
    return unsubsrcibe;
  }, []);

  const values = { setStatusAuth, statusAuth };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
