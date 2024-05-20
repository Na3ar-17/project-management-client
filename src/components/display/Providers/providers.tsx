'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

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
