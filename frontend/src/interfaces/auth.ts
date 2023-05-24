import React, { Dispatch } from "react";

export type Status = "authenticated" | "no-authenticated" | "checking";

export interface SignIn {
  email: string;
  password: string;
  remember?: boolean;
}

export interface SignUp {
  email: string;
  password: string;
  displayName?: string;
  confirmPassword?: string;
}

export interface ContextAuth {
  statusAuth: Status;
  setStatusAuth: Dispatch<React.SetStateAction<Status>>;
}
