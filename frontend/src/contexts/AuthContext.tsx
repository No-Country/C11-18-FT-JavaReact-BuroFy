"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { ContextAuth, Status } from "@/interfaces/auth";
import { firebase_auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUserInitial } from "@/redux/features/userSlice";
import { logout_firebase } from "@/lib/firebase_auth";

type PropsType = {
  children: ReactNode;
};

const emptyContext = {};

const AuthContext = createContext(emptyContext as ContextAuth);

export function useAuth(): ContextAuth {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: PropsType) => {
  const dispatch = useDispatch();
  
  const [statusAuth, setStatusAuth] = useState<Status>("checking");
  useEffect(() => {
      onAuthStateChanged(firebase_auth, async (user) => {
        if (user) {
          const providerId = user.providerData[0].providerId;
          const email = user.email as string;
          const firstName = user.displayName;
          const id = user.uid;
          const id_token = await user.getIdToken();
          console.log(id_token);
          console.log(user);
          dispatch(setUserInitial({ providerId, email, firstName, id, id_token }));
          setStatusAuth("authenticated");
        }  else {
          setStatusAuth("no-authenticated");
      }});
  }, []);

  const values = { setStatusAuth, statusAuth };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
