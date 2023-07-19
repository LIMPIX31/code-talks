import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import ThemeRegistry from './theme-registry'
import localFont from 'next/font/local'
import { Header } from '@ui/header'
import './global.css'
import ScrollProvider from './scroll-provider'

const pjs = Plus_Jakarta_Sans({ subsets: ['latin'] })

const mabry = localFont({
	src: [
		{
			path: '../assets/fonts/300.mabry.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../assets/fonts/400.mabry.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../assets/fonts/500.mabry.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../assets/fonts/600.mabry.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../assets/fonts/900.mabry.woff2',
			weight: '900',
			style: 'normal',
		},
	],
})

export const metadata: Metadata = {
	title: 'CodeTalks',
	description: 'To code to talk',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={mabry.className}>
				<ThemeRegistry options={{ key: 'mui' }}>
					<Header />
					<ScrollProvider>
						{children}
					</ScrollProvider>
				</ThemeRegistry>
			</body>
		</html>
	)
}
