'use client'

import { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { rgba } from 'polished'
import { scrolly } from '@ux/parallax'
import dynamic from 'next/dynamic'

const makeScrolly = (d: Parameters<typeof scrolly>[0], speed?: number) =>
	scrolly(d, { bindTo: 'join', offset: -250, speed })

const Stone = dynamic(() => import('@ui/brand').then(({ Stone }) => Stone))

export const JoinFragment: FC = () => (
	<Box data-parallax-id='join' position='relative' minHeight='100vh'>
		<Stone
			position='absolute'
			bottom='-10vmax'
			right='5vmax'
			component={makeScrolly({ y: [50, 0, -50] })}
		/>
		<Container maxWidth='xl' sx={{ py: 16 }}>
			<Box fontSize={['4vmax', '5vmax']} fontWeight={900} lineHeight='5vmax'>
				<Box component={makeScrolly({ x: [-1000, 0, 50] })}>Join as soon as possible</Box>
				<Box
					height='7vmax'
					width='60vmax'
					sx={{
						my: 4,
						backgroundColor: 'primary.main',
					}}
					component={makeScrolly({ x: [1000, 0, -50] })}
				/>
				<Box component={makeScrolly({ y: [500, 0, -10] })}>
					and start{' '}
					<Box
						display='inline'
						sx={({ palette }) => ({
							background: `
								linear-gradient(0deg, #000000a0, #ffffffa0),
								linear-gradient(34deg, ${palette.pink.main}, ${palette.magenta.main})
							`,
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
							filter: 'brightness(150%) saturate(150%)',
						})}
					>
						creating
					</Box>
				</Box>
				<Box component={makeScrolly({ y: [500, 0, -10] }, 0.5)}>
					with{' '}
					<Box
						display='inline'
						sx={({ palette }) => ({
							background: `
								linear-gradient(0deg, #000000a0, #ffffffa0),
								linear-gradient(34deg, ${palette.lime.main}, ${palette.secondary.main})
							`,
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
							filter: 'brightness(150%) saturate(150%)',
						})}
					>
						code
					</Box>
				</Box>
			</Box>
		</Container>
		<Box
			position='absolute'
			width='100%'
			height='100%'
			top='0'
			left='0'
			sx={({ palette }) => ({
				mixBlendMode: 'darken',
				backgroundImage: `
			conic-gradient(
			from 110deg at -10% -10%,
				${rgba(palette.secondary.main, 0.4)} 0,
				transparent 5%,
				transparent 95%,
				${rgba(palette.secondary.main, 0.4)} 100%
			)
		`,
			})}
		/>
		<Box
			position='absolute'
			width='100%'
			height='100%'
			top='0'
			left='0'
			sx={({ palette }) => ({
				mixBlendMode: 'difference',
				backgroundImage: `
			conic-gradient(
			from 125deg at -10% -10%,
				${rgba(palette.magenta.main, 0.25)} 0,
				transparent 10%,
				transparent 90%,
				${rgba(palette.magenta.main, 0.25)} 100%
			)
		`,
			})}
		/>
	</Box>
)

export default JoinFragment
