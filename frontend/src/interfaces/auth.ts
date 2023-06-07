import { Rol } from "./user";

export interface SignIn {
  email: string;
  password: string;
  remember?: boolean;
}

export interface SignUp {
  email: string;
  password: string;
  isProvider?: boolean;
  displayName?: string;
  dni?: string;
  enrollment?: string;
  rol?: Rol;
  confirmPassword?: string;
}
