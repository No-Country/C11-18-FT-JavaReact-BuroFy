import { Rol, UserInitial } from "@/interfaces/user";

export function registerAdapter(user: Omit<UserInitial, "rol">, rol: Rol)  {
  return {
    id: user.id,
    fullName: user.firstName,
    email: user.email,
    avatar: user.avatar,
    rol: rol,
    providerId: user.providerId,
    rolContent: user.rolContent || null
  };
}