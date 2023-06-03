import { Rol } from "@/interfaces/user";
import { sign_in_with_credentials } from "@/lib";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    const { user } = await sign_in_with_credentials({ email, password });
    if (!user) throw new Error("Your data isn't valid");

    const responseUser = await fetch(
      `http://backend-web-burofy.onrender.com/getPerson/${user?.id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const jsonData = await responseUser.json();
    console.log("json", jsonData);

    const response = NextResponse.json(jsonData, { status: 201 });

    response.cookies.set("id", String(user?.id), {
      path: "/",
      httpOnly: true,
    });

    response.cookies.set("rol", String(jsonData?.rol as Rol), {
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
