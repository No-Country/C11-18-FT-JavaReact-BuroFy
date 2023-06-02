import { registerAdapter } from "@/adapters/registerAdapter";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { rol, user } = await req.json(); // body.

    if (user && rol) {
      const userInitial = registerAdapter(user, rol);

      console.log("GOOGLE", user);

      await fetch("http://backend-web-burofy.onrender.com/create/person", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInitial),
      });
      const response = NextResponse.json({ user, rol });

      response.cookies.set("id", String(user?.id), {
        path: "/",
        httpOnly: true,
      });

      return response;
    }
  } catch (error) {
    console.log(error);
    return redirect("/register"), NextResponse.error();
  }
}
