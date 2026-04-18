import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Paths that require authentication
  const protectedPaths = ['/account', '/agent'];

  const isProtected = protectedPaths.some(path => pathname.startsWith(path));

  if (isProtected) {
    // In a real app, check for a session cookie/token here
    // For this prototype, we simulate a "logged in" state if a specific cookie exists
    const isAuthenticated = request.cookies.has('auth_session');

    if (!isAuthenticated) {
      // Allow access for the prototype if the user is just navigating,
      // but in a real scenario we would redirect:
      // return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/account/:path*', '/agent/:path*'],
};
