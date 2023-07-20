'use client'

import { FC } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

export const JoinFragment: FC = () => (
	<Box data-parallax-id='join' position='relative' minHeight='100vh'>
		<Container maxWidth='xl'>
			<Button variant='contained'>Join to CodeTalks</Button>
		</Container>
	</Box>
)

export default JoinFragment
