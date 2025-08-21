import { NextRequest, NextResponse } from "next/server";

type UserRole = "admin" | "user" | "guest";

// مسیرهای حفاظت شده بر اساس نقش
const protectedRoutes: Record<UserRole, string[]> = {
  admin: ["/dashboard", "/admin", "/settings"],
  user: ["/dashboard", "/profile"],
  guest: [],
};

// مسیرهای عمومی
const publicPaths = ["/", "/home", "/about", "/contact", "/signin", "/singup"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // صرف نظر کردن از مسیرهای استاتیک و API عمومی
  const ignoredPaths = ["/_next", "/favicon.ico", "/images", "/api/public"];
  if (ignoredPaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // اجازه به مسیرهای عمومی
  if (
    publicPaths.some(
      (path) => pathname === path || pathname.startsWith(path + "/")
    )
  ) {
    return NextResponse.next();
  }

  // چک کردن کوکی‌ها
  const isLoggedIn = req.cookies.get("isLoggedIn")?.value === "true";
  const role = (req.cookies.get("role")?.value as UserRole) || "guest";

  // هدایت به لاگین در صورت عدم ورود
  if (!isLoggedIn) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // بررسی دسترسی بر اساس نقش
  const allowedPaths = protectedRoutes[role] || [];
  if (
    !allowedPaths.some(
      (route) => pathname === route || pathname.startsWith(route + "/")
    )
  ) {
    return NextResponse.redirect(new URL("/403", req.url));
  }

  return NextResponse.next();
}

// matcher برای اعمال middleware فقط روی مسیرهای حفاظت شده
export const config = {
  matcher: [
    // همه مسیرها به جز استاتیک‌ها و مسیرهای عمومی
    "/((?!_next|favicon.ico|images|api/public|/|home|about|contact|login|register).*)",
  ],
};
