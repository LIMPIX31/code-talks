'use client'

import { styled } from '@mui/material/styles'
import logo from './assets/3d-logo.png'
import Image from 'next/image'
import { FC } from 'react'

const D3LogoElement = styled(Image)({
	aspectRatio: '1 / 1',
	objectFit: 'contain',
	height: '30vmax',
	width: '30vmax',
	flexShrink: '0',
})

export const D3Logo: FC = () => <D3LogoElement width={2048} height={2048} src={logo} alt='logo' />
