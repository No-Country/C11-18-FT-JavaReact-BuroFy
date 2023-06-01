import { sign_up_with_credentials } from "@/lib";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password, displayName, rol } = await req.json(); // body.
    const { user } = await sign_up_with_credentials({ email, password, displayName });
    await fetch("http://backend-web-burofy.onrender.com/create/person", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user,
        rol,
      }),
    });
    const response = NextResponse.json({ user, rol });

    response.cookies.set("id", String(user?.id), {
      path: "/",
      httpOnly: true,
    });
    
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
