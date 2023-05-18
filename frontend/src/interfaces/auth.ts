import { Dispatch } from "react";

export type Status = "authenticated" | "no-authenticated" | "checking";

export interface SignIn {
    email: string
    password: string
    remember?: boolean
}

export interface SignUp {
    email: string
    password: string
    confirmPassword?: string 
}

export interface ContextAuth {
    statusAuth: Status
    setStatusAuth: Dispatch<React.SetStateAction<Status>>
}