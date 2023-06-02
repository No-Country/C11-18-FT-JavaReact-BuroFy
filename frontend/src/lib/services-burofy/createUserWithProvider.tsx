import { Rol, UserInitial } from "@/interfaces/user";

export async function createUserWithProvider(
  rol: Rol,
  user: Omit<UserInitial, "rol">,
): Promise<UserInitial> {
  const responseUser = await fetch("/api/registerWithProvider", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      rol,
      user,
    }),
  });

  return responseUser.json();
}