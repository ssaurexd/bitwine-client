import { makeStyles } from '@material-ui/core/styles'


const useStyle = makeStyles( ( theme ) => ({
	addressCard: {
		padding: theme.spacing( 1 ),
		borderRadius: theme.shape.borderRadius,
		border: '1px solid #ccc',
		backgroundColor: 'transparent',
		cursor: 'pointer',
		display: 'flex',
		width: 'auto',
		marginRight: theme.spacing( 3 )
	},
	first: {
		marginRight: theme.spacing( 3 )
	}
}))

export default useStyle