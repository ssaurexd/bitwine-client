import { makeStyles } from '@material-ui/core/styles'
import { globalStyles } from '../../../config/theme'

const { drawerWidth } = globalStyles

const useStyle = makeStyles( ( theme ) => ({
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		height: 68,
	},
	appBarShift: {
		width: `calc(100% - ${ drawerWidth }px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	hide: {
		display: 'none',
	},
}))

export default useStyle