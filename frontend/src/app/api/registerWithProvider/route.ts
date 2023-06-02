import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { rol, user } = await req.json(); // body.

    console.log("GOOGLE", user);
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
    return redirect("/register"), NextResponse.error();
  }
}
