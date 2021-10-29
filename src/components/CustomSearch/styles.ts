import { makeStyles } from '@material-ui/core/styles'


const useStyle = makeStyles( ( theme ) => ({
	paperDialog: {
		alignItems: 'flex-start'
	},
	dialogContent: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column'
	},
	searchItemContainer: {
		width: '100%',
		minHeight: '34px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: theme.spacing( 1 ),
		transition: 'all 400ms ease',
		borderRadius: theme.shape.borderRadius,
		'&:hover': {
			backgroundColor: 'rgba(230,230,230,0.4)'
		}
	},
	imgItemContainer: {
		display: 'flex',
		flexWrap: 'nowrap',
		paddingRight: '8px',
		maxHeight: 30,
		maxWidth: 30,
		position: 'relative',
	},
	infoContainer: {
		display: 'flex',
		flexDirection: 'column'
	},
	container: {
		display: 'flex',
		flexWrap: 'nowrap',
		alignItems: 'center',
		width: 'auto',
		paddingRight: '8px',
		position: 'relative',
	},
}))


export default useStyle