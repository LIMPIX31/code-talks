'use client'

import logo from './assets/sparkle.png'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import type { FC, ForwardRefExoticComponent } from 'react'
import type { BoxProps } from '@mui/material'
import Box from '@mui/material/Box'

type GetProps<T> = T extends ForwardRefExoticComponent<infer I> ? I : never

const SparkleElement = styled(Image)({
	aspectRatio: '1 / 1',
	height: '128px',
	maxWidth: '128px',
	borderRadius: 6,
})

const SparkleImage: FC<Omit<GetProps<typeof Image>, 'src' | 'alt'>> = (props) => (
	<SparkleElement width={256} height={256} {...props} src={logo} alt='sparkle' />
)

export const Sparkle: FC<BoxProps> = (props) => (
	<Box display='inline-block' {...props}>
		<SparkleImage />
	</Box>
)
