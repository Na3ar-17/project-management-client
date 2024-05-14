import { NextRequest, NextResponse } from 'next/server'
import { EnumTokens } from './api/services/auth-toke.service'
import { DASHBOARD } from './config/pages-url-config'
import createIntlMiddleware from 'next-intl/middleware'
import { locales, localePrefix } from './navigation'

export default async function middleware(request: NextRequest) {
  const [, locale, ...segments] = request.nextUrl.pathname.split('/')
  const { url, cookies } = request

  const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value
  const DASHBOARD_PAGES = new DASHBOARD(locale)

  const isAuthPage = url.includes(DASHBOARD_PAGES.AUTH)
  const isMainPage = url === 'http://localhost:3000/'

  if (isAuthPage && refreshToken) {
    return NextResponse.redirect(new URL(DASHBOARD_PAGES.SETTINGS, url))
  }

  if (isAuthPage) {
    return NextResponse.next()
  }

  if (!refreshToken) {
    return NextResponse.redirect(new URL(DASHBOARD_PAGES.AUTH, request.url))
  }

  if (refreshToken && isMainPage) {
    return NextResponse.redirect(new URL(DASHBOARD_PAGES.SETTINGS, request.url))
  }

  const handleI18nRouting = createIntlMiddleware({
    locales: ['en', 'ua'],
    defaultLocale: 'en',
  })
  const response = handleI18nRouting(request)

  return NextResponse.next(), response
}

export const config = {
  matcher: [
    '/(ua|en)/:path*',
    '/((?!.+\\.[\\w]+$|_next).*)',
    '/(api|trpc)(.*)',
  ],
}
