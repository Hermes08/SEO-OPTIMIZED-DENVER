import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const hostname = request.headers.get('host') || '';
    const pathname = request.nextUrl.pathname;

    // 1. Electrician Domain -> /electrical-services
    if (hostname.includes('24hourelectriciandenver.com')) {
        if (pathname === '/') {
            return NextResponse.rewrite(new URL('/electrical-services', request.url));
        }
    }

    // 2. Plumber Domain -> /plumbing-services
    if (hostname.includes('plumberdenver.com')) {
        if (pathname === '/') {
            return NextResponse.rewrite(new URL('/plumbing-services', request.url));
        }
    }

    // Default: Next.js handles routing normally
    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
