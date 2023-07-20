import './global.css'
import type { Metadata } from 'next'
import ThemeRegistry from './theme-registry'
import { Header } from '@ui/header'
import Scroll from './scroll'
import { inter, mabry, pjs } from './fonts'

export const metadata: Metadata = {
	title: 'CodeTalks',
	description: 'To code to talk',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${mabry.variable} ${pjs.variable} ${inter.variable}`}>
				<ThemeRegistry options={{ key: 'mui' }}>
					<Header />
					<Scroll>{children}</Scroll>
				</ThemeRegistry>
			</body>
		</html>
	)
}
