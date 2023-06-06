
import { logout_firebase } from "@/lib";
import {  NextResponse } from "next/server";

export async function POST() {
  try {
    await logout_firebase();
    

    const response = NextResponse.json({message: "you are logout" }, { status: 201 });
    console.log("response route" , response);
    // response.cookies.set("id", "" ,{
    //   path: "/",
    //   httpOnly: true,
    // });

    // response.cookies.set("rol","", {
    //   path: "/",
    //   httpOnly: true,
    // });
    response.cookies.delete("rol");
    response.cookies.delete("id");
    
    return response;
  } catch (error) {
    if (error) {
      console.log("error", error);
   
      return NextResponse.json(error, { status: 409 });
    }
  }
}