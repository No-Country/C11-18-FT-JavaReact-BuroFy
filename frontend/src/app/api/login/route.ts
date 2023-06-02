import { User } from "@/interfaces/user";
import { sign_in_with_credentials } from "@/lib";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const { user } = await sign_in_with_credentials({ email, password });

    if (user as unknown as Pick<User, "id" | "id_token">) {
      const responseUser = await fetch(
        `http://backend-web-burofy.onrender.com/getPerson/${user?.id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const response = NextResponse.json(user?.id_token, responseUser);

      response.cookies.set("id", String(user?.id), {
        path: "/",
        httpOnly: true,
      });

      return response;
    }
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
