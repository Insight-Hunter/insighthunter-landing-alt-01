import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, geo } = request;

  // 1. Redirect root to /blog (SEO push)
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/blog', request.url));
  }

  // 2. A/B Test: 40% users get early PWA prompt
  const random = Math.random();
  if (random < 0.4) {
    const response = NextResponse.next();
    response.cookies.set('pwa_variant', 'early', { path: '/', maxAge: 86400 });
    return response;
  }

  // 3. Block bots (optional)
  const ua = request.headers.get('user-agent') || '';
  if (/bot|crawl|spider/i.test(ua)) {
    return new Response('Access Denied', { status: 403 });
  }

  // 4. Geo-redirect (e.g., EU → GDPR notice)
  if (geo?.country === 'DE') {
    const url = new URL('/gdpr', request.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/blog/:path*', '/app/:path*'],
};
