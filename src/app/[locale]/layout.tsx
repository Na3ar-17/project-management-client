import { Figtree } from 'next/font/google'
import './globals.scss'
import { FC, Suspense } from 'react'
import { Providers } from '@/components/display/Providers/providers'
import { COLORS } from '@/constants/colors.constans'
import { Toaster } from 'react-hot-toast'
import { Metadata } from 'next'
import { SITE_NAME } from '@/constants/seo.constants'
import { useMessages, NextIntlClientProvider } from 'next-intl'
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
  params: { locale: string }
}

const RootLayout = ({ children, params: { locale } }: IProps) => {
  const messages = useMessages()

  return (
    <html lang={locale}>
      <body suppressHydrationWarning={true} className={figtree.className}>
        <Suspense>
          <Providers>
            <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
          </Providers>
        </Suspense>
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
      </body>
    </html>
  )
}

export default RootLayout
