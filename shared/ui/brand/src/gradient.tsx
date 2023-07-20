'use client'

import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

export const CodetalksGradient = styled(Box)(({ theme }) => ({
	height: '100vh',
	backgroundImage: `linear-gradient(180deg, ${theme.palette.background.default} ,${theme.palette.secondary[100]})`,
}))
