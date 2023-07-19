import type { FC, ReactNode } from 'react'
import { Box, Container } from '@mui/material'
import { SquareLogo } from '@ui/brand'

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
				<SquareLogo />
				<Box display='flex' flexDirection='row' gap={2}>
					{features}
				</Box>
			</Box>
		</Container>
	</Box>
)
