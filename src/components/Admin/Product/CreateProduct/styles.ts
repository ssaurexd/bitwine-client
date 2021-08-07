import { makeStyles } from '@material-ui/core/styles'


const useStyle = makeStyles( ( theme ) => ({
	paper: {
		height: 'auto',
		width: '100%',
		padding: theme.spacing( 3 )
	},
	title: {
		textTransform: 'uppercase',
		fontWeight:'bold'
	},
	subTitle: {
		marginBottom: 20,
		textTransform: 'uppercase'
	},
	select: {
		height: 42
	},
	drop: {
		border: 'none',
		backgroundColor: 'inherit'
	}
}))

export default useStyle