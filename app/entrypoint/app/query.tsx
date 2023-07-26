'use client'

import type { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export const QueryProvider: FC<PropsWithChildren> = ({ children }) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
