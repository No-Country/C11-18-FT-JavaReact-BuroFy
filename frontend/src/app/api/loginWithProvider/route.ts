import { UserInitial } from "@/interfaces/user";
import { axios } from "@/lib";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const id: Pick<UserInitial, "id"> = await req.json();
    if (!id) throw new Error("Your data isn't valid");
    const responseUser = axios.get(`/getPerson/${id}`);
    const jsonData = (await responseUser).data;
    const response = NextResponse.json((await responseUser).data, { status: 201 });
    response.cookies.set("id", String(id), {
      path: "/",
      httpOnly: true,
    });

    response.cookies.set("rol", String(jsonData?.rol), {
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
