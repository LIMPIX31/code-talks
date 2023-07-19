import { createTheme, ThemeOptions } from '@mui/material'
import { mix } from 'polished'

const dark = '#121212'
const light = '#f4f8ff'
const primary = '#0c5fff'

const base = {
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
	shape: {
		borderRadius: 6,
	},
} satisfies ThemeOptions

export const darkPalette = {
	palette: {
		mode: 'dark',
		primary: {
			main: primary,
			'100': mix(0.1, primary, dark),
			'600': mix(0.9, primary, light),
			'700': mix(0.8, primary, light),
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
} satisfies ThemeOptions

const components = {
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					fontFamily: 'var(--font-pjs)',
					fontWeight: '900',
					letterSpacing: '0.07rem',
					fontSize: '1rem',
					transition: `all ${base.transitions.duration.standard}ms`,
				},
				contained: {
					color: darkPalette.palette.background.default,
				},
				outlined: {
					border: `2px solid ${darkPalette.palette.primary.main}`,
					'&:hover': {
						border: `3px solid ${darkPalette.palette.primary.main}`,
					},
				},
			},
		},
	},
} satisfies ThemeOptions

export const darkSchema = createTheme({ ...base, ...darkPalette, ...components })
