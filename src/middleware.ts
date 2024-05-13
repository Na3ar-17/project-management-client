import { NextRequest, NextResponse } from 'next/server'
import { EnumTokens } from './api/services/auth-toke.service'
import { DASHBOARD_PAGES } from './config/pages-url-config'
import createIntlMiddleware from 'next-intl/middleware'

const intlMiddleware = createIntlMiddleware({
  locales: ['en', 'ua'],
  defaultLocale: 'en',
})

export default async function middleware(
  request: NextRequest,
  response: NextResponse
) {
  await intlMiddleware(request)

  const { url, cookies } = request
  const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

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

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/(ua|en)/:path*',
    '/((?!.+\\.[\\w]+$|_next).*)',
    '/(api|trpc)(.*)',
  ],
}
