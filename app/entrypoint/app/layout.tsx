import './global.css'
import type { Metadata } from 'next'
import ThemeRegistry from './theme-registry'
import { Header } from '@widget/header'
import Scroll from './scroll'
import { inter, mabry, pjs } from './fonts'
import React, { Suspense } from 'react'

export const metadata: Metadata = {
	title: 'CodeTalks',
	description: 'To code to talk',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${mabry.variable} ${pjs.variable} ${inter.variable}`}>
				<Suspense fallback={<div>123</div>}>
					<ThemeRegistry options={{ key: 'mui' }}>
						<Header />
						<Scroll>{children}</Scroll>
					</ThemeRegistry>
				</Suspense>
			</body>
		</html>
	)
}
