// import { User } from "@/interfaces/user";
import { sign_in_with_credentials } from "@/lib";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const { user } = await sign_in_with_credentials({ email, password });

    if (user) {
      console.log("user" , user);
      const responseUser = await fetch(
        `http://backend-web-burofy.onrender.com/getPerson/${user?.id}`
      );
      
      const response = NextResponse.json(user?.id_token, responseUser);
      console.log("response", response);
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
