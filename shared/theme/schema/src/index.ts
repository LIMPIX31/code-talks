import { createTheme } from '@mui/material'

export const darkSchema = createTheme({
	components: {},
	palette: {
		mode: 'dark',
		primary: {
			main: '#0c5fff',
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
			default: '#09001f',
		},
		text: {
			primary: '#f4f8ff',
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
