'use client'

import { Box, styled } from '@mui/material'

export const CodetalksGradient = styled(Box)(({ theme }) => ({
	height: '100vh',
	backgroundImage: `linear-gradient(180deg, ${theme.palette.background.default} ,${theme.palette.secondary[100]})`,
}))
