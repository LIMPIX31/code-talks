import type { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { SquareLogo } from '@ui/brand'
import Link from 'next/link'

export interface HeaderProps {
	features?: ReactNode[]
}

export const Header: FC<HeaderProps> = ({ features }) => (
	<Box
		position='fixed'
		top='0'
		left='0'
		width='100%'
		height={{
			xl: '80px',
			lg: '80px',
			md: '60px',
			sm: '60px',
			xs: '60px',
		}}
		zIndex={100}
		sx={{
			backdropFilter: 'blur(50px)',
		}}
	>
		<Container maxWidth='xl' sx={{ height: '100%' }}>
			<Box display='flex' flexDirection='row' alignItems='center' height='100%' justifyContent='space-between'>
				<Link href='/'>
					<SquareLogo />
				</Link>
				<Box display='flex' flexDirection='row' gap={2}>
					{features}
				</Box>
			</Box>
		</Container>
	</Box>
)
