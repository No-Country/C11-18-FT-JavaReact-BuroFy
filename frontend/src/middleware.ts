import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

  const id = request.cookies.get("id");
  const rol = request.cookies.get("rol");
  
  if (!rol || !id) return NextResponse.redirect(new URL("/registro", request.url));
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/inicio/:path", "/perfil/:path", "/buscar/:path", "/consultas/:path"],
};
