import { createMuiTheme } from '@material-ui/core/styles';


const theme =  createMuiTheme({
	overrides: {
	},
	typography: {
		h1: {
			fontSize: '3.5rem',
		},
		h2: {
			fontSize: '3rem'
		},
		h3: {
			fontSize: '2.5rem'
		},
		h4: {
			fontSize: '2rem'
		},
		h5: {
			fontSize: '1.5rem'
		},
		h6: {
			fontSize: '1rem'
		},
	}
})

export default theme