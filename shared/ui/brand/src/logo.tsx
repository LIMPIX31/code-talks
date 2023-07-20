'use client'

import { styled } from '@mui/material'
import logo from './assets/square-logo.png'
import Image from 'next/image'
import type { FC } from 'react'

export const SquareLogo = styled(Image as unknown as FC<{ width?: number; height?: number; src?: any; alt?: string }>)({
	aspectRatio: '1 / 1',
	maxHeight: '64px',
	width: 'auto',
	borderRadius: 6,
})

SquareLogo.defaultProps = {
	width: 256,
	height: 256,
	src: logo,
	alt: 'logo',
}
