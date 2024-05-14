import { NextRequest, NextResponse } from 'next/server'
import { EnumTokens } from './api/services/auth-toke.service'
import { DASHBOARD } from './config/pages-url-config'

export default async function middleware(
  request: NextRequest,
  response: NextResponse
) {
  const { url, cookies } = request
  const DASHBOARD_PAGES = new DASHBOARD()

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
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
