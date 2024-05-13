import type { Metadata } from 'next'
import { Inter, Figtree } from 'next/font/google'
import '../globals.scss'
import { SITE_NAME } from '@/constants/seo.constants'
import { Suspense } from 'react'
import { Providers } from '@/components/display/Providers/providers'
import { Toaster } from 'react-hot-toast'
import { COLORS } from '@/constants/colors.constans'
import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
const figtree = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'Best one for managing your projects',
}
interface IProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default async function RootLayout({
  children,
  params: { locale },
}: IProps) {
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <body suppressHydrationWarning={true} className={figtree.className}>
        <NextIntlClientProvider messages={messages}>
          <Suspense>
            <Providers>
              {children}
              <Toaster
                position="top-center"
                toastOptions={{
                  style: {
                    background: COLORS['secondary'],
                    color: COLORS['menu-text'],
                    fontSize: '18px',
                  },
                }}
              />
            </Providers>
          </Suspense>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
