import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(req: NextRequest) {
if (req.nextUrl.pathname === "/checkout") {
return NextResponse.redirect(new URL("/cart", req.url));
}
}