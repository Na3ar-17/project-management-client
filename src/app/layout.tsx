import { Figtree } from 'next/font/google'
import './globals.scss'
import { FC, Suspense } from 'react'
import { Providers } from '@/components/display/Providers/providers'
import { COLORS } from '@/constants/colors.constans'
import { Toaster } from 'react-hot-toast'
import { Metadata } from 'next'
import { SITE_NAME } from '@/constants/seo.constants'
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
}

const RootLayout = ({ children }: IProps) => {
  return (
    <html>
      <body suppressHydrationWarning={true} className={figtree.className}>
        <Suspense>
          <Providers>{children}</Providers>
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
