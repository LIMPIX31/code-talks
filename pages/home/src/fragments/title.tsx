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

const Counter: FC<{ title: string; count: string | number }> = ({ count, title }) => (
	<Box
		component={makeScrolly({ y: [0, 0, -500], rotate: [0, 5, 35] })}
		sx={({ palette }) => ({
			display: 'flex',
			backdropFilter: 'blur(25px) !important',
			flexDirection: 'column',
			alignItems: 'center',
			borderRadius: 3,
			borderStyle: 'solid',
			borderWidth: '1px',
			borderColor: `color-mix(in srgb, ${palette.text.primary}, transparent 95%)`,
			backgroundColor: `color-mix(in srgb, ${palette.background.default}, transparent 50%)`,
			boxShadow: `0 0 10px 0 color-mix(in srgb, ${palette.background.default}, transparent 80%)`,
			padding: '25px',
			gap: ['40px', '30px'],
		})}
	>
		<Box fontWeight={900} fontSize='18px' lineHeight='0.1vmax' textAlign='center'>
			{title}
		</Box>
		<Box fontWeight={900} fontSize='60px' lineHeight='23px' color='magenta.700'>
			{count}
		</Box>
	</Box>
)

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

export const TitleFragment: FC<{ online: number; count: number }> = ({ online, count }) => (
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
							})}
							sx={{
								fontSize: '1.6vmax',
								position: 'absolute',
								left: '50%',
								top: ['50vmax', '30vmax'],
								backgroundColor: 'primary.main',
								color: 'background.default',
								padding: '0 40px',
								lineHeight: '3vmax',
								fontWeight: 900,
								fontFamily: 'var(--font-pjs)',
								rotate: '-2deg',
								zIndex: 10,
								width: '120vmax',
								translate: '-50% 0',
								textAlign: 'center',
							}}
						>
							If you wanna make friends and waste your time then can join us!!
						</Box>
						<Box fontWeight={900} fontSize='inherit' lineHeight='inherit' component={makeScrolly({ y: [0, 0, -200] })}>
							CoTalks
						</Box>
						<Box fontWeight={900} fontSize='5vmax' lineHeight='4vmax' component={makeScrolly({ y: [0, 0, -200] })}>
							Waste your time
						</Box>
						<Box position='relative' zIndex={10} marginTop={[5, 5]} display='flex' gap='1vmax' flexWrap='wrap'>
							<Counter title='Members' count={count} />
							<Counter title='Online' count={online} />
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
