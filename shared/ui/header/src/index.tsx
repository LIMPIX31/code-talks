'use client'

import type { FC, ReactNode } from 'react'
import { Box, Container } from '@mui/material'
import { SquareLogo } from '@ui/brand'

export interface HeaderProps {
	feature: ReactNode[]
}

export const Header: FC = () => (
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
		boxShadow='0 5px 20px 0px rgba(0, 0, 0, .2)'
		sx={({ palette }) => ({
			backdropFilter: 'blur(50px) brightness(90%)',
			'&:after': {
				position: 'absolute',
				display: 'block',
				content: '""',
				width: '100%',
				height: '1px',
				left: 0,
				bottom: 0,
				background: `linear-gradient(90deg, transparent, ${palette.primary.main}, transparent)`,
			},
		})}
	>
		<Container maxWidth='xl' sx={{ height: '100%' }}>
			<Box display='flex' flexDirection='row' alignItems='center' height='100%'>
				<SquareLogo />
			</Box>
		</Container>
	</Box>
)
