import type { FC } from 'react'
import { Box, Container, Typography } from '@mui/material'

export const HomePage: FC = () => (
	<Container maxWidth='xl' sx={{ isolation: 'isolate' }}>
		<Box position='relative'>
			<Box position='absolute'>
				<Typography variant='h1' fontWeight={900} fontSize='15vw' color='primary'>
					CodeTalks
				</Typography>
			</Box>
			<Box
				sx={{
					position: 'absolute',
					backgroundColor: 'primary.main',
					px: 10,
					py: 5,
					borderRadius: 5,
					bottom: -380,
					right: 200,
					mixBlendMode: 'difference',
				}}
			>
				<Typography variant='h1' fontWeight={900} fontSize='5rem' color='background.default'>
					Mind powered
				</Typography>
			</Box>
		</Box>
	</Container>
)
