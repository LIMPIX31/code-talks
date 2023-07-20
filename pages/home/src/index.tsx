'use client'

import type { FC } from 'react'
import Box from '@mui/material/Box'
import dynamic from 'next/dynamic'

const TitleFragment = dynamic(() => import('./fragments/title'))
const FooterFragment = dynamic(() => import('./fragments/footer'))

export const HomePage: FC = () => (
	<Box>
		<TitleFragment />
		<FooterFragment />
	</Box>
)

export default HomePage
