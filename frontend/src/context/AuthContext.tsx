"use client";

import {  createContext, useContext, useState } from "react";

type Status = "authenticated" | "no-authenticated" | "checking";

const emptyContext = {};
const AuthContext = createContext(
  emptyContext as { change_status: (status: Status) => void; statusAuth: Status },
);

export function useAuth(): { change_status: (status: Status) => void; statusAuth: Status } {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [statusAuth, setStatusAuth] = useState<Status>("no-authenticated");
  console.log(statusAuth)
  const change_status = (status: Status) => setStatusAuth(status);

  const values = {change_status, statusAuth}

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
};

export default AuthContext;
