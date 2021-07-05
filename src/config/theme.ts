import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core'


let theme =  createMuiTheme({
	overrides: {
		MuiCssBaseline: {
			"@global": {
				body: {
					color: '#525252'
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
			'K2D',
			'-apple-system',
			'Roboto',
			'Arial',
			'sans-serif'
		].join(',')
	}
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
		fontSize: '.8rem',
	},
	[ theme.breakpoints.up('sm') ]: {
		fontSize: '.9rem'
	},
	[ theme.breakpoints.up('md') ]: {
		fontSize: '1.2rem'
	},
	[ theme.breakpoints.up('lg') ]: {
		fontSize: '1.3rem',
	},
}

export default theme