import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Clone the request headers and set a new header `x-hello-from-middleware`
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-hello-from-middleware', 'hello');
  console.log('Middleware! 🐳');
  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });

  // Set a new response header `x-hello-from-middleware-response`
  response.headers.set('x-hello-from-middleware-response', 'hello');
  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard/:path*',
} 