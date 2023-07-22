'use client'

import { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { rgba } from 'polished'
import { scrolly } from '@ux/parallax'
import dynamic from 'next/dynamic'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import { JoinContract } from '@feature/invite-join'

const makeScrolly = (d: Parameters<typeof scrolly>[0], speed?: number) =>
	scrolly(d, { bindTo: 'join', offset: -250, speed })

const Stone = dynamic(() => import('@ui/brand').then(({ Stone }) => Stone))

const StoneSubfrag: FC = () => (
	<Stone position='absolute' bottom='-10vmax' right='5vmax' component={makeScrolly({ y: [50, 0, -50] })} />
)

const GradientsSubfrag: FC = () => (
	<>
		<Box
			position='absolute'
			width='100%'
			height='100%'
			top='0'
			left='0'
			key='grad1'
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
			key='grad2'
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
	</>
)

const TextSubfrag: FC = () => (
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
)

const svgArrow = (
	<svg width='1024' height='349' version='1.1' viewBox='0 0 1024 349' xmlns='http://www.w3.org/2000/svg'>
		<path
			d='m5.63 174h1013c-225 0-225-169-225-169s0 169 225 169c-225 0-225 169-225 169'
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit='0'
			strokeWidth='1vmax'
		/>
	</svg>
)

const JoinSubfrag: FC<{ onClick: () => void }> = ({ onClick }) => (
	<Box
		position='absolute'
		zIndex={3}
		top='-17vmax'
		right='10vmax'
		height={['60vmax', '50vmax']}
		data-parallax-sticky='join-box'
		data-parallax-id='join-box'
	>
		<Box
			sx={{ cursor: 'pointer' }}
			onClick={onClick}
			component={scrolly(
				{ y: [0, 0, 'height'], rotate: [0, -10, -5] },
				{ sticky: 'join-box', bindTo: 'join-box', offset: -500 },
			)}
		>
			<Box
				sx={{
					py: 2,
					px: 10,
					display: 'inline-flex',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: 'primary.main',
					gap: 10,
					borderRadius: 3,
				}}
			>
				<SvgIcon
					sx={{
						color: 'background.default',
						fontSize: '8vmax',
						height: 'auto',
					}}
				>
					{svgArrow}
				</SvgIcon>
				<Typography color='background.default' fontSize='3vmax' fontWeight={900}>
					Join
				</Typography>
			</Box>
		</Box>
	</Box>
)

export const JoinFragment: FC<{ auth: boolean }> = ({ auth }) => {
	const contract = useState(false)

	const [, submit] = contract

	return (
		<Box data-parallax-id='join' position='relative' minHeight='100vh'>
			<JoinContract state={contract} />
			<StoneSubfrag />
			<Container maxWidth='xl' sx={{ py: 16 }}>
				<TextSubfrag />
				{!auth && <JoinSubfrag onClick={() => submit(true)} />}
			</Container>
			<GradientsSubfrag />
		</Box>
	)
}

export default JoinFragment
