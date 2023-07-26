import './global.css'
import type { Metadata } from 'next'
import ThemeRegistry from './theme-registry'
import { Header } from '@widget/header'
import { inter, mabry, pjs } from './fonts'
import type { ReactNode } from 'react'
import Spinner from './spinner'
import { QueryProvider } from './query'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
	title: 'CodeTalks',
	description: 'To code to talk',
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${mabry.variable} ${pjs.variable} ${inter.variable}`}>
				<ThemeRegistry options={{ key: 'mui' }}>
					<QueryProvider>
						<Spinner />
						<Header />
						{children}
					</QueryProvider>
				</ThemeRegistry>
			</body>
		</html>
	)
}
