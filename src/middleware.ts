import { NextRequest, NextResponse } from 'next/server'
import { EnumTokens } from './api/services/auth-toke.service'
import { DASHBOARD_PAGES } from './config/pages-url-config'

export default async function middleware(
  request: NextRequest,
  response: NextResponse
) {
  const { url, cookies } = request

  const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

  const isAuthPage = url.includes(DASHBOARD_PAGES.AUTH)

  if (isAuthPage && refreshToken) {
    return NextResponse.redirect(new URL(DASHBOARD_PAGES.SETTINGS, url))
  }

  if (isAuthPage) {
    return NextResponse.next()
  }

  if (!refreshToken) {
    return NextResponse.redirect(new URL(DASHBOARD_PAGES.AUTH, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/authorization', '/home', '/projects:path*', '/settings'],
}
