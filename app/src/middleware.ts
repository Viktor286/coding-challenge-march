import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware ensures that the routes are properly handled
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  console.log('Middleware processing path:', pathname);
  
  // Handle destinations route
  if (pathname.startsWith('/destinations')) {
    return NextResponse.next();
  }
  
  // Handle packages route
  if (pathname.startsWith('/packages')) {
    return NextResponse.next();
  }
  
  // Handle accommodations route
  if (pathname.startsWith('/accommodations')) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /fonts (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api|_next|fonts|[\\w-]+\\.\\w+).*)',
  ],
};