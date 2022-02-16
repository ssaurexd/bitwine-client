import { makeStyles } from '@material-ui/core/styles'
import { globalStyles } from '../../config/theme'


const useStyle = makeStyles( ( theme ) => ({
	root: {
		marginTop: -theme.spacing( 11 ),
		marginBottom: theme.spacing( 4 ),
		minHeight: `auto`,
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		display: 'flex',
		boxShadow: theme.shadows[2],
		zIndex: 100,
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			marginBottom: theme.spacing( 0 ),
			paddingBottom: theme.spacing( 4 )
		}
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
		width: '280px',
		[theme.breakpoints.down('sm')]: {
			border: 'none',
			width: 'auto'
		}
	},
	tabContainer: {
		width: '100%'
	}
}))


export default useStyle