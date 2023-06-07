import { registerAdapter } from "@/adapters/registerAdapter";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { user, rol } = await req.json(); // body.
    if (!user || !rol) throw new Error("Your data isn't valid");

    const userInitial = registerAdapter(user, rol);
    console.log("userInitial route" , userInitial);
    await fetch("http://backend-web-burofy.onrender.com/create/person", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInitial),
    });

    const response = NextResponse.json({ user, rol }, { status: 201 });
    console.log("response route" , response);
    response.cookies.set("id", String(user?.id), {
      path: "/",
      httpOnly: true,
    });

    response.cookies.set("rol", String(rol), {
      path: "/",
      httpOnly: true,
    });

    return response;
  } catch (error) {
    if (error) {
      console.log("error", error);
      req.cookies.delete("id");
      req.cookies.delete("rol");
      return NextResponse.json(error, { status: 409 });
    }
  }
}