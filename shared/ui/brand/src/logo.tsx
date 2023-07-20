'use client'

import { styled } from '@mui/material/styles'
import logo from './assets/square-logo.png'
import Image from 'next/image'
import type { FC } from 'react'

const SquareLogoElement = styled(Image)({
	aspectRatio: '1 / 1',
	maxHeight: '64px',
	width: 'auto',
	borderRadius: 6,
})

export const SquareLogo: FC = () => <SquareLogoElement width={256} height={256} src={logo} alt='logo' />
