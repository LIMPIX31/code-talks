'use client'

import type { FC } from 'react'
import { Box, Container, Typography } from '@mui/material'
import { makeVerticalParallax } from '@ux/parallax'

export const HomePage: FC = () => (
	<Container
		maxWidth='xl'
		sx={{
			position: 'relative',
			isolation: 'isolate',
			display: 'flex',
			flexDirection: 'column',
		}}
	>
		<Box position='relative' minHeight='100vh' sx={{ pt: 64 }}>
			<Box position='absolute' bottom='10vw' left='0' display='flex' flexDirection='row'>
				<Typography fontSize='12vw' lineHeight='12vw'>
					<Box
						component={makeVerticalParallax({ x: [0, -500], y: [0, -400], rotate: [0, -20] })}
						sx={{
							fontSize: '3vw',
							position: 'absolute',
							right: '25vw',
							top: '20vw',
							backgroundColor: 'primary.main',
							color: 'background.default',
							padding: '0 40px',
							lineHeight: '8vw',
							fontWeight: 900,
							fontFamily: 'var(--font-pjs)',
							rotate: '-23deg',
							mixBlendMode: 'difference',
							zIndex: 10,
						}}
					>
						Mind powered people
					</Box>
					<Box fontSize='inherit' lineHeight='inherit' component={makeVerticalParallax({ y: [0, -200] })}>
						To code
					</Box>
					<Box fontSize='inherit' lineHeight='inherit' component={makeVerticalParallax({ y: [0, -100], x: [0, -500] })}>
						To talk
					</Box>
				</Typography>
				<Box component={makeVerticalParallax({ y: [0, 100], x: [0, 50] })} position='relative'>
					<Box
						position='absolute'
						left='10%'
						top='50%'
						width='40vw'
						height='20vw'
						sx={{
							backgroundColor: 'secondary.main',
							translate: '-50% -50%',
							filter: 'blur(100px)',
							opacity: 0.2,
						}}
					/>
					<svg width='30vw' height='30vw' version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
						<g transform='translate(-552 -1128)'>
							<g transform='matrix(1.18 0 0 1.18 -139 -255)'>
								<g transform='matrix(2.11 0 0 2.11 554 1130)' fill='#0c5fff'>
									<rect transform='rotate(-90)' x='-195' y='159' width='102' height='25.4' />
									<rect transform='scale(-1)' x='-222' y='-94.8' width='102' height='25.4' />
									<rect transform='rotate(-45)' x='-65.4' y='134' width='102' height='25.4' />
									<rect transform='rotate(225)' x='-236' y='-65.4' width='102' height='25.4' />
								</g>
								<g
									fill='none'
									stroke='#0c5fff'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeMiterlimit='0'
									strokeWidth='.851'
								>
									<path d='m1024 1277-68.8-68.8' />
									<path d='m809 1277-68.8-68.8' />
									<path d='m889 1542-68.8-68.8' />
									<path d='m588 1360 152-152h215' />
									<path d='m821 1473v-132' />
									<path d='m955 1208v68.8' />
									<path d='m821 1473h68.8' />
									<path d='m657 1429-68.8-68.8' />
									<path d='m943 1542-68.8-68.8' />
									<path d='m874 1473v-143' />
									<path d='m740 1208v138' />
									<path d='m657 1429v-138' />
									<path d='m740 1208 215 68.8' />
									<path d='m955 1208-146 68.8' />
									<path d='m588 1360 221-83.1' />
									<path d='m740 1208-83.1 221' />
									<path d='m821 1473 53.7-143' />
									<path d='m874 1473-42.2-143' />
									<path d='m821 1473 123 68.8' />
									<path d='m889 1542-15.1-68.8' />
									<path d='m809 1277h-138' />
									<path d='m588 1360h138' />
								</g>
							</g>
						</g>
					</svg>
				</Box>
			</Box>
		</Box>
		<Box position='relative' minHeight='100vh' />
	</Container>
)
