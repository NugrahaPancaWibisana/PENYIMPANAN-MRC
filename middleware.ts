import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const user = {
    token: req.cookies.get("token"),
    admin: req.cookies.get("admin"),
  };

  if (!user.token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (!user.admin) {
    return NextResponse.redirect(new URL('/', req.url));
  }
}

export const config = {
  matcher: [
    "/user/:path",
    "/user/peminjaman/:path",
    "/user/pengembalian/:path",
    "/admin/dashboard/:path",
    "/admin/pengembalian/:path",
    "/admin/riwayat/:path",
  ],
};
