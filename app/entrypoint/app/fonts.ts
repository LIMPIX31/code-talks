import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import localFont from 'next/font/local'

export const pjs = Plus_Jakarta_Sans({
	subsets: ['latin'],
	variable: '--font-pjs',
	weight: 'variable',
})

export const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	weight: 'variable',
})

export const mabry = localFont({
	variable: '--font-mabry',
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
