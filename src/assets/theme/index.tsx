import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		background: {
			default: '#F6F7FB'
		},
		primary: {
			main: '#2B5BFC',
			light: '#EAEFFF',
			dark: '#0032C8',
		},
		secondary: {
			main: '#FFFFFF',
			light: '#F7F7FB',
		},
		divider: '#EAEAF2',
		success: {
			main: '#02BC9C',
			light: '#E6F8F5',
			dark: '#008B6E',
		},
		info: {
			main: '#2196F3',
			light: '#E9F4FE',
			dark: '#0069C0',
		},
		error: {
			main: '#F47373',
			light: '#FEF1F1',
			dark: '#BD4248',
		},
		warning: {
			main: '#FF8A65',
			light: '#FFF3F0',
			dark: '#C75B39',
		},
		text: {
			primary: '#050D26',
			secondary: '#7F869E',
		}
	},
	typography: {
		fontFamily: '\'Inter\', sans-serif',
		h1: {
			fontFamily: '\'Inter\', sans-serif',
			fontSize: '1.5rem',
			fontWeight: 600,
		},
		h2: {
			fontFamily: '\'Inter\', sans-serif',
			fontSize: '1rem',
			fontWeight: 600,
		},
		h3: {
			fontFamily: '\'Inter\', sans-serif',
			fontSize: '0.875rem',
			fontWeight: 500,
		},
		button: {
			fontFamily: '\'Inter\', sans-serif',
			fontSize: '0.875rem',
			fontWeight: 400,
		},
		body1: {
			fontFamily: '\'Inter\', sans-serif',
			fontSize: '0.875rem',
			fontWeight: 600,
		},
		caption: {
			fontFamily: '\'Inter\', sans-serif',
			fontSize: '0.75rem',
			fontWeight: 500,
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1400,
		},
	},
});

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		background: {
			default: '#080D18',
		},
		primary: {
			main: '#2B5BFC',
			light: '#EAEFFF',
			dark: '#0032C8',
		},
		secondary: {
			main: '#131925',
			light: '#F7F7FB',
		},
		divider: '#282D3D',
		success: {
			main: '#02BC9C',
			light: '#003b36',
			dark: '#008B6E',
		},
		info: {
			main: '#2196F3',
			light: '#E9F4FE',
			dark: '#0069C0',
		},
		error: {
			main: '#F47373',
			light: '#FEF1F1',
			dark: '#BD4248',
		},
		warning: {
			main: '#FF8A65',
			light: '#FFF3F0',
			dark: '#C75B39',
		},
		text: {
			primary: '#FFFFFF',
			secondary: '#FFFFFF',
		}
	},
	typography: {
		fontFamily: '\'Inter\', sans-serif',
		h1: {
			fontFamily: '\'Inter\', sans-serif',
			fontSize: '1.5rem',
			fontWeight: 600,
		},
		h2: {
			fontFamily: '\'Inter\', sans-serif',
			fontSize: '1rem',
			fontWeight: 600,
		},
		h3: {
			fontFamily: '\'Inter\', sans-serif',
			fontSize: '0.875rem',
			fontWeight: 500,
		},
		button: {
			fontFamily: '\'Inter\', sans-serif',
			fontSize: '0.875rem',
			fontWeight: 400,
		},
		body1: {
			fontFamily: '\'Inter\', sans-serif',
			fontSize: '0.875rem',
			fontWeight: 600,
		},
		caption: {
			fontFamily: '\'Inter\', sans-serif',
			fontSize: '0.75rem',
			fontWeight: 500,
		}
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1400,
		},
	},
});