import { SignIn } from "@/interfaces/auth";
import { User } from "@/interfaces/user";

export async function loginUser({ email, password }: SignIn): Promise<User> {
  const user = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password,
      email,
    }),
  });

  return user.json();
}
