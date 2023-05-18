<<<<<<< HEAD
/* import { Address, Phone } from "./serializers/Common";
=======
import { Address, Phone } from "./serializers/common";
>>>>>>> 3b2ffcdb955f13f2367ed393ec1561729dd99d30
import { UserClientContent, UserProfessionalContent } from "./serializers/user";

export type Role = "client" | "professional";

export interface User {
  id: string | number;
  id_token: string;
  email: string;
  rol: string | Role;
  firstName: string | null;
  rolContent?: UserClientContent | UserProfessionalContent;
  birthday?: Date | null;
  surName?: string | null;
  dni?: string | null;
  phone?: Phone | null;
  address?: Address | null;
  avatar?: string | null;
  status?: boolean;
  verified?: boolean;
}
 */