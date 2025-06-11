import { NextRequest, NextResponse } from 'next/server';

// 检测是否为移动设备
function isMobileDevice(userAgent: string): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
}

// 需要重定向到移动端的PC端路由
const pcRoutes = [
  '/declaration',
  '/hackathon',
  '/about',
  '/foundation/justice-fund',
  '/foundation/tech-fairness-fund',
];

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const userAgent = request.headers.get('user-agent') || '';

  // 移动端重定向逻辑
  if (isMobileDevice(userAgent)) {
    // 检查是否访问PC端路由且不是已经在/mobile路径下
    if (!url.pathname.startsWith('/mobile') && !url.pathname.startsWith('/admin')) {
      for (const route of pcRoutes) {
        if (url.pathname === route || url.pathname.startsWith(`${route}/`)) {
          // 重定向到对应的移动端路由
          url.pathname = `/mobile${url.pathname}`;
          return NextResponse.redirect(url);
        }
      }
      
      // 如果访问根路径，重定向到移动端主页
      if (url.pathname === '/') {
        url.pathname = '/mobile';
        return NextResponse.redirect(url);
      }
    }
  }

  // 原有的admin相关逻辑
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
}

export const config = {
  matcher: [
    // 原有的matcher
    '/admin/:path*',
    '/admin',
    '/assets/:path*',
    '/browser_upgrade/:path*',
    '/tinymce/:path*',
    '/_next/:path*',
    '/static/:path*',
    // 新增需要检测移动端的路由
    '/',
    '/declaration/:path*',
    '/hackathon/:path*',
    '/about/:path*',
    '/foundation/:path*',
  ],
}