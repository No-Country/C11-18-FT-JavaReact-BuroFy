import { Rol, UserInitial } from "@/interfaces/user";

export function registerAdapter(
  user: Omit<UserInitial, "rol">,
  rol: Rol,
): Omit<UserInitial, "id_token"> {
  return {
    id: user.id,
    firstName: user.firstName,
    email: user.email,
    avatar: user.avatar,
    rol: rol,
    providerId: user.providerId,
    rolContent: user.rolContent || null,
  };
}
