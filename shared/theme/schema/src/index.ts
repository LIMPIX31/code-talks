import { createTheme } from '@mui/material'
import { mix } from 'polished'

const dark = '#09001f'
const light = '#f4f8ff'
const primary = '#0c5fff'

export const darkSchema = createTheme({
	components: {},
	palette: {
		mode: 'dark',
		primary: {
			main: primary,
			'100': mix(0.1, primary, dark),
		},
		error: {
			main: '#ff0c30',
		},
		warning: {
			main: '#ffcc0c',
		},
		success: {
			main: '#8aff0c',
		},
		background: {
			default: dark,
		},
		text: {
			primary: light,
		},
	},
	spacing: (abs: number) => `${abs * 6}px`,
	transitions: {
		duration: {
			standard: 300,
		},
	},
	typography: {
		fontFamily: 'var(--font-mabry)',
		fontSize: 14,
	},
})
