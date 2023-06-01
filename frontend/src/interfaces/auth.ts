import React, { Dispatch } from "react";
import { Rol } from "./user";

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
  rol?: Rol;
  confirmPassword?: string;
}

export interface ContextAuth {
  statusAuth: Status;
  setStatusAuth: Dispatch<React.SetStateAction<Status>>;
}
