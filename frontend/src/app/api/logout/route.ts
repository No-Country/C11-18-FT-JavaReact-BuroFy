import { logout_firebase } from "@/lib";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await logout_firebase();
    req.cookies.delete("id");
    req.cookies.delete("rol");

    return NextResponse.next({ status: 200 });
  } catch (error) {
    if (error) {
      console.log("error", error);
      return NextResponse.json(error, { status: 409 });
    }
  }
}
