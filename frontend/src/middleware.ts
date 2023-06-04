import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const id = request.cookies.get("id");
  const rol = request.cookies.get("rol");

  if (!rol || !id) return NextResponse.redirect(new URL("/acceso", request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/registro","/", "/perfil/:path", "/buscar/:path", "/consultas/:path"],
};
