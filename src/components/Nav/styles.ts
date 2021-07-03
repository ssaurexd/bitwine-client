import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles( ( theme ) => ({
	appBar: {
		flexGrow: 1,
		height: '80px'
	},
	toolBar: {
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1),
		height: '100%'
	},
	logo: {
		textDecoration: 'none',
		color: '#333'
	},
	menu: {
		color: '#333'
	},
	colorWhite: {
		color: 'white'
	}
}))

export default useStyle