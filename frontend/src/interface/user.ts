import { Address, Phone } from "./serializers/Common";
import { UserClientContent, UserProfessionalContent } from "./serializers/user";

export type Role = "client" | "professional";

export interface User {
  id: string | number;
  id_token: string;
  email: string;
  rol: string | Role;
  rolContent: UserClientContent | UserProfessionalContent;
  firstName: string | null;
  birthday?: Date | null;
  surName?: string | null;
  dni?: string | null;
  phone?: Phone | null;
  sex?: string | null;
  address?: Address | null;
  avatar?: string | null;
  status?: boolean;
  verified?: boolean;
}
