import { Address, Phone } from "./serializers/common";
import { UserClientContent, UserProfessionalContent } from "./serializers/user";

export type Rol = "client" | "professional";
export type ProviderType = "facebook" | "google";
export type Verified = "authenticated" | "no-authenticated" | "checking";

export interface User {
  id: string;
  id_token: string;
  providerId: ProviderType | string;
  email: string | null;
  rol: Rol | string;
  firstName: string | null;
  rolContent?: UserClientContent | UserProfessionalContent | null;
  birthday?: Date | null;
  surName?: string | null;
  phone?: Phone | null;
  address?: Address | null;
  avatar?: string | null;
  verified?: Verified;
}

export type UserInitial = Pick<
  User,
  "id" | "id_token" | "providerId" | "firstName" | "email" | "avatar" | "rol" | "rolContent"
>;
