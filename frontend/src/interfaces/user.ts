<<<<<<< HEAD
=======

>>>>>>> 475d7a1b59ec4120ae8384b405b44ada33c3ea12
import { Address, Phone } from "./serializers/common";
import { UserClientContent, UserProfessionalContent } from "./serializers/user";

export type Role = "client" | "professional";

export interface User {
  id: string | number;
  id_token: string;
  email: string;
  rol: string | Role;
  firstName: string | null;
  rolContent?: UserClientContent | UserProfessionalContent | null;
  birthday?: Date | null;
  surName?: string | null;
  dni?: string | null;
  phone?: Phone | null;
  address?: Address | null;
  avatar?: string | null;
  verified?: boolean;
}
