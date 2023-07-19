import './global.css'
import type { Metadata } from 'next'
import ThemeRegistry from './theme-registry'
import { Header } from '@ui/header'
import Scroll from './scroll'
import { Button } from '@mui/material'
import { inter, mabry, pjs } from './fonts'
import VpnKey from '@mui/icons-material/VpnKey'

export const metadata: Metadata = {
	title: 'CodeTalks',
	description: 'To code to talk',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${mabry.variable} ${pjs.variable} ${inter.variable}`}>
				<ThemeRegistry options={{ key: 'mui' }}>
					<Header
						features={[
							<Button variant='contained' color='primary' size='large' startIcon={<VpnKey />}>
								Login
							</Button>,
						]}
					/>
					<Scroll>{children}</Scroll>
				</ThemeRegistry>
			</body>
		</html>
	)
}
