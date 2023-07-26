import { createTheme, type ThemeOptions } from '@mui/material/styles'
import { mix } from 'polished'
import { PaletteColor, type PaletteColorOptions } from '@mui/material'

const dark = '#101010'
const divider = '#232323'
const light = '#f4f8ff'
const primary = '#f4f8ff'
const secondary = '#0c5fff'

declare module '@mui/material/styles' {
	interface Palette {
		magenta: PaletteColor
		pink: PaletteColor
		lime: PaletteColor
	}

	interface PaletteOptions {
		magenta: PaletteColorOptions
		pink: PaletteColorOptions
		lime: PaletteColorOptions
	}

	interface BreakpointOverrides {
		sm: false
	}
}

const base = {
	breakpoints: {
		values: {
			xs: 0,
			md: 900,
			lg: 1200,
			xl: 1536,
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
	shape: {
		borderRadius: 3,
	},
} satisfies ThemeOptions

export const darkPalette = {
	palette: {
		mode: 'dark',
		primary: {
			main: primary,
			'100': mix(0.05, primary, dark),
			'200': mix(0.2, primary, dark),
			'300': mix(0.4, primary, dark),
			'400': mix(0.7, primary, dark),
			'600': mix(0.9, primary, light),
			'700': mix(0.8, primary, light),
		},
		secondary: {
			main: secondary,
			'100': mix(0.1, secondary, dark),
		},
		magenta: {
			main: '#390cff',
		},
		pink: {
			main: '#ff0cce',
		},
		lime: {
			main: '#0cff61',
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
					fontSize: '1rem',
					textTransform: 'initial',
					transition: `all ${base.transitions.duration.standard}ms`,
				},
				sizeLarge: {
					lineHeight: '2rem',
					paddingLeft: '32px',
					paddingRight: '32px',
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
		MuiDialog: {
			styleOverrides: {
				container: {
					backdropFilter: 'saturate(0) blur(10px)',
				},
				paper: {
					background: dark,
					border: `1px solid ${divider}`,
					filter: 'none',
					borderRadius: 6,
				},
			},
		},
		MuiTooltip: {
			styleOverrides: {
				tooltip: {
					transition: 'none',
				},
				popper: {
					transition: 'none',
				},
			},
		},
		MuiMenu: {
			styleOverrides: {
				paper: {
					background: dark,
					border: `1px solid ${divider}`,
				},
			},
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {
					padding: '2px 16px',
					minHeight: '32px',
				},
			},
		},
	},
} satisfies ThemeOptions

export const darkSchema = createTheme({ ...base, ...darkPalette, ...components })
