import { SignUp } from "@/interfaces/auth";
import { UserInitial } from "@/interfaces/user";

export async function createUser({
  password,
  email,
  displayName,
  rol,
}: SignUp): Promise<UserInitial> {
  
  const user = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password,
      email,
      displayName,
      rol,
    }),
  });

  return user.json();
}
