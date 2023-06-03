import { User, UserInitial } from "@/interfaces/user";

export async function loginUserWithProvider(id: Pick<UserInitial, "id">): Promise<User> {
  const user = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
    }),
  });

  return user.json();
}
