import { makeStyles } from '@material-ui/core/styles'
import { globalStyles } from '../../../config/theme'

const { drawerWidth } = globalStyles

const useStyle = makeStyles( ( theme ) => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
		boxShadow: theme.shadows[3]
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		justifyContent: 'space-between',
	},
}))

export default useStyle