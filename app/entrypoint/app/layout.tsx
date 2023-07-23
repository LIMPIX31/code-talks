import './global.css'
import type { Metadata } from 'next'
import ThemeRegistry from './theme-registry'
import { Header } from '@widget/header'
import Scroll from './scroll'
import { inter, mabry, pjs } from './fonts'
import type { ReactNode } from 'react'
import Spinner from './spinner'

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
					<Spinner />
					<Header />
					<Scroll>{children}</Scroll>
				</ThemeRegistry>
			</body>
		</html>
	)
}
