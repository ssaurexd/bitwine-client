import { makeStyles } from '@material-ui/core/styles'


const useStyle = makeStyles( ( theme ) => ({
	root: {
		backgroundColor: '#1d2d33',
		marginTop: theme.spacing( 6 ),
		padding: theme.spacing( 5 ),
		color: '#c2c4c8',
		/* borderRadius: theme.shape.borderRadius,
		boxShadow: theme.shadows[1] */
	},
	iconContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '4rem',
		marginBottom: theme.spacing( 2 ),
		[theme.breakpoints.up('sm')]: {
			fontSize: '6rem'
		}
	}
}))

export default useStyle