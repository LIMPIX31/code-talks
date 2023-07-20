'use client'

import { FC } from 'react'
import Box from '@mui/material/Box'
import { CodetalksBanner } from '@ui/brand'
import { makeVerticalParallax } from '@ux/parallax'
import Typography from '@mui/material/Typography'

export const FooterFragment: FC = () => (
	<Box
		position='relative'
		minHeight='100vh'
		sx={{ pt: 14, gap: 10, backgroundColor: 'secondary.100' }}
		fontSize='14vmax'
		fontWeight='900'
		fontFamily='var(--font-pjs)'
		display='flex'
		flexDirection='column'
		alignItems='center'
		justifyContent='center'
	>
		<Box
			width='45vmax'
			position='relative'
			left='-2vmax'
			component={makeVerticalParallax(0, { x: { out: [-500, 0] } })}
		>
			<CodetalksBanner />
			<Box
				position='absolute'
				top='20%'
				left='-30%'
				width='100%'
				height='100%'
				sx={{
					backgroundColor: 'secondary.main',
					filter: 'blur(300px)',
					opacity: 0.5,
				}}
			/>
		</Box>
		<Box
			position='relative'
			width='39vmax'
			height='4vmax'
			component={makeVerticalParallax(0, { y: { out: [-200, 0] }, x: { out: [500, 0] } })}
			sx={{
				backgroundColor: 'secondary.main',
				rotate: '5deg',
			}}
		>
			<Typography
				position='absolute'
				left='8vmax'
				top='50%'
				fontSize='2vmax'
				color='secondary.main'
				fontWeight='900'
				fontFamily='var(--font-pjs)'
				whiteSpace='nowrap'
				sx={{
					translate: '0 -50%',
					mixBlendMode: 'difference',
					rotate: '-2deg',
				}}
			>
				Website by Nodium - Copyright (c) 2023
			</Typography>
		</Box>
	</Box>
)

export default FooterFragment
