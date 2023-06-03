import { registerAdapter } from "@/adapters/registerAdapter";
import { axios } from "@/lib";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { user, rol } = await req.json(); // body.
    if (!user || !rol) throw new Error("Your data isn't valid");

    const userInitial = registerAdapter(user, rol);

    await axios.post("/create/person", userInitial, {
      headers: { "Content-Type": "application/json" },
    });

    const response = NextResponse.json({ user, rol }, { status: 201 });

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
