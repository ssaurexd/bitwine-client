import { makeStyles } from '@material-ui/core/styles'
import { globalStyles } from '../../../config/theme'

const { drawerWidth } = globalStyles
const useStyle = makeStyles( ( theme ) => ({
	root: {
		display: 'flex'
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		justifyContent: 'space-between',
	},
	content: {
		flexGrow: 1,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
		width:  '100%',
		paddingTop: theme.spacing( 4 ),
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	}
}))

export default useStyle