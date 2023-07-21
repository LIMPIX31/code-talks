'use client'

import { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { scrolly } from '@ux/parallax'
import Container from '@mui/material/Container'
import dynamic from 'next/dynamic'

const makeScrolly = (d: Parameters<typeof scrolly>[0]) => scrolly(d, { bindTo: 'title' })

const D3Logo = dynamic(() => import('@ui/brand').then(({ D3Logo }) => D3Logo))
const Sparkle = dynamic(() => import('@ui/brand').then(({ Sparkle }) => Sparkle))

const sparkles = [
	<Sparkle
		position='absolute'
		top='15vmax'
		left='2vmax'
		key='sprkl1'
		component={makeScrolly({ y: [0, 0, 500], x: [0, 0, 200], rotate: [0, 15, -20] })}
	/>,
	<Sparkle
		position='absolute'
		top='15vmax'
		right='4vmax'
		key='sprkl2'
		component={makeScrolly({ y: [0, 0, 300], x: [0, 0, -300], rotate: [0, -35, -90] })}
	/>,
	<Sparkle
		position='absolute'
		bottom='15vmax'
		left='70vmax'
		key='sprkl3'
		sx={{ scale: '1.5' }}
		zIndex={2}
		component={makeScrolly({ y: [0, 0, 300], x: [0, 0, -1500], rotate: [0, 19, 200] })}
	/>,
]

export const TitleFragment: FC = () => (
	<Box overflow='hidden' position='relative'>
		{sparkles}
		<Container
			data-parallax-id='title'
			sx={{
				position: 'relative',
				isolation: 'isolate',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Box position='relative' minHeight='100vh' sx={{ pt: 64 }}>
				<Box
					position='absolute'
					bottom='0'
					left='0'
					width='10vmax'
					height='20vmax'
					sx={{
						backgroundColor: 'magenta.main',
						filter: 'blur(200px)',
						opacity: 0.6,
					}}
				/>
				<Box
					position='absolute'
					top='50%'
					right='0'
					width='10vmax'
					height='20vmax'
					sx={{
						backgroundColor: 'pink.main',
						filter: 'blur(200px)',
						opacity: 0.2,
					}}
				/>
				<Box position='absolute' top='50%' left='0' display='flex' flexDirection='row' sx={{ translate: '0 -50%' }}>
					<Typography fontSize='10vmax' lineHeight='12vmax' whiteSpace='nowrap' component='div'>
						<Box
							component={makeScrolly({
								x: [0, 0, -500],
								y: [0, 0, -400],
								rotate: [0, 0, -20],
							})}
							sx={{
								fontSize: '3vmax',
								position: 'absolute',
								right: '25vmax',
								top: '22vmax',
								backgroundColor: 'primary.main',
								color: 'background.default',
								padding: '0 40px',
								lineHeight: '8vmax',
								fontWeight: 900,
								fontFamily: 'var(--font-pjs)',
								rotate: '-18deg',
								mixBlendMode: 'difference',
								zIndex: 10,
								width: '46vmax',
								textAlign: 'center',
							}}
						>
							I don&apos;t know what to write
						</Box>
						<Box fontSize='inherit' lineHeight='inherit' component={makeScrolly({ y: [0, 0, -200] })}>
							To code
						</Box>
						<Box fontSize='inherit' lineHeight='inherit' component={makeScrolly({ y: [0, 0, -100], x: [0, 0, -500] })}>
							To talk
						</Box>
					</Typography>
					<Box component={makeScrolly({ y: [0, 0, 100], x: [0, 0, 50] })} position='relative' flexShrink='0'>
						<Box
							position='absolute'
							left='10%'
							top='50%'
							width='40vmax'
							height='20vmax'
							sx={{
								backgroundColor: 'secondary.main',
								translate: '-50% -50%',
								filter: 'blur(100px)',
								opacity: 0.2,
							}}
						/>
						<Box position='relative' left={['-17vmax', '5vmax']}>
							<D3Logo />
						</Box>
					</Box>
				</Box>
			</Box>
		</Container>
	</Box>
)

export default TitleFragment
