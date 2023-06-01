"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { ContextAuth, Status } from "@/interfaces/auth";
import { firebase_auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { setUserInitial, setUserInitialWithProvider } from "@/redux/features/userSlice";
// import { logout_firebase } from "@/lib/firebase_auth";
import { useAppDispatch } from "@/hooks";

type PropsType = {
  children: ReactNode;
};

const emptyContext = {};
const AuthContext = createContext(emptyContext as ContextAuth);

//hook for useContext
export function useAuth(): ContextAuth {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: PropsType) => {
  const dispatch = useAppDispatch();
  const [statusAuth, setStatusAuth] = useState<Status>("checking");
  //remplace for react query, useEffect for moment!
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(firebase_auth, async (user) => {
      if (user) {
        const providerId = user.providerData[0].providerId;
        const email = user.email as string;
        const firstName = user.providerData[0].displayName;
        const id = user.uid;
        const id_token = await user.getIdToken();
        const avatar = user.photoURL;
        setStatusAuth("authenticated");
        console.log(user);
        user.providerData[0].providerId === "password"
          ? dispatch(setUserInitial({ providerId, email, firstName, id, id_token }))
          : dispatch(
            setUserInitialWithProvider({ providerId, email, firstName, id, id_token, avatar }),
          );
      } else {
        setStatusAuth("no-authenticated");
      }
    });
    return () => unSubscribe();
  }, [dispatch]);

  const values = { setStatusAuth, statusAuth };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
