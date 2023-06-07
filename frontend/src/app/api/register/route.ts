import { registerAdapter } from "@/adapters/registerAdapter";
import { axios } from "@/lib";
import { NextRequest, NextResponse } from "next/server";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export async function POST(req: NextRequest) {
  try {
    const { user, rol } = await req.json(); // body.
    if (!user || !rol) throw new Error("Your data isn't valid");

    const userInitial = registerAdapter(user, rol);
    // await fetch("http://backend-web-burofy.onrender.com/create/person", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(userInitial),
    // });

    await axios.post("/create/person", userInitial, config);

    const response = NextResponse.json({ user, rol }, { status: 201 });
    console.log("response route", response);
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
      return NextResponse.json(error, { status: 409 });
    }
  }
}
