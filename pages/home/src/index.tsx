'use client'

import type { FC } from 'react'
import { Box, Container, Typography } from '@mui/material'
import { motion, useScroll, useTransform } from 'framer-motion'

export const HomePage: FC = () => {
	const { scrollYProgress } = useScroll()

	const y = useTransform(scrollYProgress, [0, 1], [0, 200])

	return (
		<Container
			maxWidth='xl'
			sx={{
				isolation: 'isolate',
				display: 'flex',
				flexDirection: 'column',
				alignItems: {
					xs: 'center',
					md: 'left',
				},
			}}
		>
			<Box position='relative' minHeight='100vh' sx={{ pt: 16 }}>
				<Box
					position='fixed'
					height='100vh'
					width='100%'
					top='0'
					left='0'
					sx={{
						background: `linear-gradient(-90deg, #ffffff05 1px, transparent 1px),
					linear-gradient(#ffffff05 1px, transparent 1px),
					linear-gradient(-90deg, rgba(0, 0, 0, .04) 1px, transparent 1px),
					linear-gradient(rgba(0,0,0,.04) 1px, transparent 1px),
					linear-gradient(transparent 3px, transparent 3px, transparent 78px, transparent 78px),
					linear-gradient(-90deg, #ffffff08 1px, transparent 1px),
					linear-gradient(-90deg, transparent 3px, transparent 3px, transparent 78px, transparent 78px),
					linear-gradient(#ffffff08 1px, transparent 1px),
					transparent`,
						backgroundSize: `
					32px 32px,
					32px 32px,
					320px 320px,
					320px 320px,
					320px 320px,
					320px 320px,
					320px 320px,
					320px 320px`,
					}}
				/>
				<Typography fontSize='10vw' fontWeight={900} color='text' position='relative'>
					CodeTalks _
				</Typography>
				<Typography
					component={motion.div}
					color='background.default'
					fontSize='2vw'
					fontWeight={900}
					fontFamily='var(--font-pjs)'
					width='30vw'
					position='relative'
					zIndex='1'
					sx={{ backgroundColor: 'text.primary', px: 6, py: 1, rotate: '-10deg' }}
					style={{ y }}
				>
					Mind powered
					<Box
						position='absolute'
						height='100%'
						width='100%'
						top='2'
						left='2'
						sx={{ backgroundColor: 'primary.main' }}
					/>
				</Typography>
			</Box>
			<Box position='relative' minHeight='100vh' />
		</Container>
	)
}
