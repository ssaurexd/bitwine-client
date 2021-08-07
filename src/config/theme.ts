import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core'


let theme =  createMuiTheme({
	palette: {
		primary: {
			main: '#800000',
			light: '#993333',
			dark: '#590000',
			contrastText: '#fff',
		},
		secondary: {
			main: '#0E5887',
			light: '#86d0ff',
			dark: '#004473',
			contrastText: '#fff'
		}
	},
	overrides: {
		MuiCssBaseline: {
			"@global": {
				body: {
					color: '#525252',
					boxSizing: 'border-box'
				},
				a: {
					textDecoration: 'none',
					color: 'inherit'
				}
			}
		}
	},
	typography: {
		fontSize: 16,
		fontFamily: [
			'Maven Pro',
			' sans serif'
		].join(','),
		body2: {
			fontSize: '0.95rem'
		}
	},
	shape: {
		borderRadius: 8
	},
	shadows: [
		"none",
		"0px 2px 1px -1px rgba(64,64,64,0.04),0px 1px 1px 0px rgba(64,64,64,0.1),0px 1px 3px 0px rgba(64,64,64,0.12)",
		"0px 3px 1px -2px rgba(204, 204, 204, 0.2),0px 2px 2px 0px rgba(204, 204, 204, 0.2),0px 1px 5px 0px rgba(64,64,64,0.12)", // <--( 2 ) Editado para hacer juego con la 9
		"0px 3px 3px -2px rgba(64,64,64,0.2),0px 3px 4px 0px rgba(64,64,64,0.14),0px 1px 8px 0px rgba(64,64,64,0.12)",
		"0px 2px 4px -1px rgba(64,64,64,0.2),0px 4px 5px 0px rgba(64,64,64,0.14),0px 1px 10px 0px rgba(64,64,64,0.12)",
		"0px 3px 5px -1px rgba(64,64,64,0.2),0px 5px 8px 0px rgba(64,64,64,0.14),0px 1px 14px 0px rgba(64,64,64,0.12)",
		"0px 3px 5px -1px rgba(64,64,64,0.2),0px 6px 10px 0px rgba(64,64,64,0.14),0px 1px 18px 0px rgba(64,64,64,0.12)",
		"0px 4px 5px -2px rgba(64,64,64,0.2),0px 7px 10px 1px rgba(64,64,64,0.14),0px 2px 16px 1px rgba(64,64,64,0.12)",
		"0px 5px 5px -3px rgba(64,64,64,0.2),0px 8px 10px 1px rgba(64,64,64,0.14),0px 3px 14px 2px rgba(64,64,64,0.12)",
		"0px 5px 6px -3px rgba(204, 204, 204, 0.2),0px 9px 12px 1px rgba(204, 204, 204, 0.14),0px 3px 16px 2px rgba(64,64,64,0.12)", // <-- ( 9 )
		"0px 6px 6px -3px rgba(64,64,64,0.2),0px 10px 14px 1px rgba(64,64,64,0.14),0px 4px 18px 3px rgba(64,64,64,0.12)",
		"0px 6px 7px -4px rgba(64,64,64,0.2),0px 11px 15px 1px rgba(64,64,64,0.14),0px 4px 20px 3px rgba(64,64,64,0.12)",
		"0px 7px 8px -4px rgba(64,64,64,0.2),0px 12px 17px 2px rgba(64,64,64,0.14),0px 5px 22px 4px rgba(64,64,64,0.12)",
		"0px 7px 8px -4px rgba(64,64,64,0.2),0px 13px 19px 2px rgba(64,64,64,0.14),0px 5px 24px 4px rgba(64,64,64,0.12)",
		"0px 7px 9px -4px rgba(64,64,64,0.2),0px 14px 21px 2px rgba(64,64,64,0.14),0px 5px 26px 4px rgba(64,64,64,0.12)",
		"0px 8px 9px -5px rgba(64,64,64,0.2),0px 15px 22px 2px rgba(64,64,64,0.14),0px 6px 28px 5px rgba(64,64,64,0.12)",
		"0px 8px 10px -5px rgba(64,64,64,0.2),0px 16px 24px 2px rgba(64,64,64,0.14),0px 6px 30px 5px rgba(64,64,64,0.12)",
		"0px 8px 11px -5px rgba(64,64,64,0.2),0px 17px 26px 2px rgba(64,64,64,0.14),0px 6px 32px 5px rgba(64,64,64,0.12)",
		"0px 9px 11px -5px rgba(64,64,64,0.2),0px 18px 28px 2px rgba(64,64,64,0.14),0px 7px 34px 6px rgba(64,64,64,0.12)",
		"0px 9px 12px -6px rgba(64,64,64,0.2),0px 19px 29px 2px rgba(64,64,64,0.14),0px 7px 36px 6px rgba(64,64,64,0.12)",
		"0px 10px 13px -6px rgba(64,64,64,0.2),0px 20px 31px 3px rgba(64,64,64,0.14),0px 8px 38px 7px rgba(64,64,64,0.12)",
		"0px 10px 13px -6px rgba(64,64,64,0.2),0px 21px 33px 3px rgba(64,64,64,0.14),0px 8px 40px 7px rgba(64,64,64,0.12)",
		"0px 10px 14px -6px rgba(64,64,64,0.2),0px 22px 35px 3px rgba(64,64,64,0.14),0px 8px 42px 7px rgba(64,64,64,0.12)",
		"0px 11px 14px -7px rgba(64,64,64,0.2),0px 23px 36px 3px rgba(64,64,64,0.14),0px 9px 44px 8px rgba(64,64,64,0.12)",
		"0px 11px 15px -7px rgba(64,64,64,0.2),0px 24px 38px 3px rgba(64,64,64,0.14),0px 9px 46px 8px rgba(64,64,64,0.12)"
	]
})

theme.typography.h1 = {
	[ theme.breakpoints.up('xs') ]: {
		fontSize: '1.6rem'
	},
	[ theme.breakpoints.up('sm') ]: {
		fontSize: '1.8rem'
	},
	[ theme.breakpoints.up('md') ]: {
		fontSize: '2.8rem'
	},
	[ theme.breakpoints.up('lg') ]: {
		fontSize: '3.5rem',
	},
}
theme.typography.h2 = {
	[ theme.breakpoints.up('xs') ]: {
		fontSize: '1.4rem',
	},
	[ theme.breakpoints.up('sm') ]: {
		fontSize: '1.6rem'
	},
	[ theme.breakpoints.up('md') ]: {
		fontSize: '2.2rem'
	},
	[ theme.breakpoints.up('lg') ]: {
		fontSize: '3rem',
	},
}
theme.typography.h3 = {
	[ theme.breakpoints.up('xs') ]: {
		fontSize: '1.2rem',
	},
	[ theme.breakpoints.up('sm') ]: {
		fontSize: '1.4rem'
	},
	[ theme.breakpoints.up('md') ]: {
		fontSize: '1.8rem'
	},
	[ theme.breakpoints.up('lg') ]: {
		fontSize: '2.5rem',
	},
}
theme.typography.h4 = {
	[ theme.breakpoints.up('xs') ]: {
		fontSize: '1.1rem',
	},
	[ theme.breakpoints.up('sm') ]: {
		fontSize: '1.2rem'
	},
	[ theme.breakpoints.up('md') ]: {
		fontSize: '1.6rem'
	},
	[ theme.breakpoints.up('lg') ]: {
		fontSize: '2rem',
	},
}
theme.typography.h5 = {
	[ theme.breakpoints.up('xs') ]: {
		fontSize: '1rem',
	},
	[ theme.breakpoints.up('sm') ]: {
		fontSize: '1.1rem'
	},
	[ theme.breakpoints.up('md') ]: {
		fontSize: '1.4rem'
	},
	[ theme.breakpoints.up('lg') ]: {
		fontSize: '1.5rem',
	},
}
theme.typography.h6 = {
	[ theme.breakpoints.up('xs') ]: {
		fontSize: '0.9rem',
		lineHeight: '1.4rem'
	},
	[ theme.breakpoints.up('sm') ]: {
		fontSize: '0.9rem'
	},
	[ theme.breakpoints.up('md') ]: {
		fontSize: '0.9rem',
		lineHeight: '1.43rem'
	},
	[ theme.breakpoints.up('lg') ]: {
		fontSize: '0.9rem',
	},
}

export const globalStyles = {
	spacing: {
		1: 5
	},
	shape: {
		borderRadius1: 4,
		borderRadius2: 8,
	},
	drawerWidth: 300
}

export default theme