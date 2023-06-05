
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   console.log("hola");
//   const id = request.cookies.get("id");
//   const rol = request.cookies.get("rol");
//   const response =  NextResponse.next();
//   if (!rol || !id) return NextResponse.redirect(new URL("/registro", request.url));
//   if ( request.nextUrl.pathname.includes("/registro")){
//     response.cookies.set("rol","");
//     response.cookies.set("id", "");
//   }
  
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/inicio/:path", "/perfil/:path", "/buscar/:path", "/consultas/:path"],
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // const pathname = request.nextUrl.pathname;
  // const sensitiveRoutes = ["/registro"];
  // const isAccessingSensitiveRoute = sensitiveRoutes.some((route) =>
  //   pathname.startsWith(route)
  // );
  
  const id = request.cookies.get("id");
  const rol = request.cookies.get("rol");
  

  if (!rol || !id) return NextResponse.redirect(new URL("/registro", request.url));
 
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/inicio/:path", "/perfil/:path", "/buscar/:path", "/consultas/:path"],
};
