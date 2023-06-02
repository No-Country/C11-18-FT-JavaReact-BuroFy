import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const id = request.cookies.get("id");
  if (!id) return NextResponse.redirect(new URL("/acceso", request.url));
  console.log(request.nextUrl.pathname);
  const allCookies = request.cookies.getAll();
  console.log(allCookies);
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/perfil/:path", "/buscar/:path", "/consultas/:path"],
};
