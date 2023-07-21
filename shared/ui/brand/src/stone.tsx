'use client'

import stone from './assets/stone.png'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import type { FC, ForwardRefExoticComponent } from 'react'
import type { BoxProps } from '@mui/material'
import Box from '@mui/material/Box'

type GetProps<T> = T extends ForwardRefExoticComponent<infer I> ? I : never

const StoneElement = styled(Image)({
	aspectRatio: '1 / 1',
	objectFit: 'contain',
	height: '1024px',
	maxWidth: '1024px',
	borderRadius: 6,
})

const StoneImage: FC<Omit<GetProps<typeof Image>, 'src' | 'alt'>> = (props) => (
	<StoneElement width={1024} height={1024} {...props} src={stone} alt='stone' />
)

export const Stone: FC<BoxProps> = (props) => (
	<Box display='inline-block' {...props}>
		<StoneImage />
	</Box>
)
