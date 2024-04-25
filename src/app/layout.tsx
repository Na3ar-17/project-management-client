import type { Metadata } from 'next'
import { Inter, Figtree } from 'next/font/google'
import './globals.scss'
import { SITE_NAME } from '@/constants/seo.constants'
import { Suspense } from 'react'
import Loader from '@/components/ui/loader/Loader'
import { Providers } from '@/components/display/Providers/providers'

const inter = Inter({ subsets: ['latin'] })
const figtree = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'Best one for managing your projects',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={figtree.className}>
        <Suspense fallback={<Loader />}>
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  )
}
