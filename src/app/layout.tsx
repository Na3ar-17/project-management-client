import type { Metadata } from 'next'
import { Inter, Figtree } from 'next/font/google'
import './globals.scss'
import { SITE_NAME } from '@/constants/seo.constants'

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
      <body className={figtree.className}>{children}</body>
    </html>
  )
}
