"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { ContextAuth, Status } from "@/interfaces/auth";
import { firebase_auth } from "@/lib/firebase";

type PropsType = {
  children: ReactNode;
};

const emptyContext = {};

const AuthContext = createContext(emptyContext as ContextAuth);

export function useAuth(): ContextAuth {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: PropsType) => {
  const [statusAuth, setStatusAuth] = useState<Status>("checking");
  console.log(statusAuth);
  useEffect(() => {
    const unsubsrcibe = firebase_auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setStatusAuth("authenticated");
      } else {
        setStatusAuth("no-authenticated");
      }
    });
    return unsubsrcibe;
  }, []);

  const values = { setStatusAuth, statusAuth };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
