'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren, useState } from 'react'
import { ThemeProvider } from './theme-provider'

interface IProps {
  children: React.ReactNode
}

export function Providers({ children }: IProps) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    })
  )

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
