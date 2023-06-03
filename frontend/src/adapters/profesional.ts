import { UserInitial } from "@/interfaces/user";

export function registerAdapterProfessional(
  user: Omit<UserInitial, "rol">,
  enrollment: string,
  dni: string,
): Omit<UserInitial,  "rol"> {
  return {
    id: user.id,
    id_token: user.id_token,
    fullName: user.fullName,
    email: user.email,
    avatar: user.avatar,
    providerId: user.providerId,
    rolContent: {
      enrollment,
      dni,
    },
  };
}