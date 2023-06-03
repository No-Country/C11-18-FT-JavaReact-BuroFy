import { Rol, UserInitial } from "@/interfaces/user";

export async function createUser(rol: Rol, user: Omit<UserInitial, "rol">): Promise<UserInitial> {
  const responseUser = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user,
      rol,
    }),
  });

  return responseUser.json();
}
