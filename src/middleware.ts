import { NextRequest, NextResponse } from 'next/server'
import { EnumTokens } from './api/services/auth-toke.service'
import { DASHBOARD } from './config/pages-url-config'
import createMiddleware from 'next-intl/middleware'
import { locales } from './navigation'

export default async function middleware(
  request: NextRequest,
  response: NextResponse
) {
  const { url, cookies } = request
  const [, , , localeFromUrl] = url.split('/')

  const DASHBOARD_PAGES = new DASHBOARD(localeFromUrl)

  const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value
  const localeFromCookie = cookies.get('NEXT_LOCALE')?.value

  const isAuthPage = url.includes(DASHBOARD_PAGES.AUTH)
  const isPasswordResetPage = url.includes(DASHBOARD_PAGES.PASSWORD_RESET)

  if (!locales.includes(localeFromUrl as any)) {
    return NextResponse.redirect(
      new URL(new DASHBOARD(localeFromCookie || '').AUTH, url)
    )
  }

  if (isAuthPage && refreshToken) {
    return NextResponse.redirect(new URL(DASHBOARD_PAGES.SETTINGS, url))
  }

  if ((url.endsWith('ua') || url.endsWith('en')) && refreshToken) {
    return NextResponse.redirect(new URL(DASHBOARD_PAGES.SETTINGS, url))
  }

  if (!refreshToken && !url.includes('authorization') && !isPasswordResetPage) {
    return NextResponse.redirect(new URL(DASHBOARD_PAGES.AUTH, url))
  }

  const nextIntlMiddleware = createMiddleware({
    locales,
    defaultLocale: 'en',
  })

  return nextIntlMiddleware(request)
}

export const config = {
  matcher: ['/', '/:locale(ua|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
}
