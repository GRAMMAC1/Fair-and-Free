import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  if (url.pathname.startsWith('/admin')) {
    const adminPath = url.pathname.replace('/admin', '') || '/';
    const adminUrl = `https://fair3-admin.pages.dev/${adminPath}${url.search}`

    return NextResponse.rewrite(adminUrl)
  }

  if (
    url.pathname.startsWith('/assets/') ||
    url.pathname.startsWith('/browser_upgrade/') ||
    url.pathname.startsWith('/tinymce/')
  ) {
    const adminUrl = `https://fair3-admin.pages.dev${url.pathname}${url.search}`;
    return NextResponse.rewrite(adminUrl);
  }

  if (

    url.pathname.startsWith('/_next/') ||
    url.pathname.startsWith('/static/')
  ) {
    // 检查 referer 是否来自 /admin 页面
    const referer = request.headers.get('referer');
    if (referer && referer.includes('/admin')) {
      const adminUrl = `https://fair3-admin.pages.dev${url.pathname}${url.search}`;
      return NextResponse.rewrite(adminUrl);
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    '/admin/:path*',
    '/admin',
    '/assets/:path*',
    '/browser_upgrade/:path*',
    '/tinymce/:path*',
    '/_next/:path*',
    '/static/:path*',
  ],
}