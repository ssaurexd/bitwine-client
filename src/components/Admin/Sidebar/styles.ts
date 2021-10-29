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
		border: 'none',
		borderRight: '1px solid #f3f3f3',
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
		justifyContent: 'space-between',
	},
	nested: {
		paddingLeft: theme.spacing(4)
	},
	sidebarProfile: {
		height: 'auto',
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'column',
		padding: 10,
	},
	sidebarProfileAvatar: {
		background: 'gray',
		width: 100,
		height: 100,
		borderRadius: '100%',
		overflow: 'hidden'
	},
	sidebarProfileAvatar_img: {
		width: '100%',
		height: '100%',
		objectFit: 'contain'
	},
	listItemActiveLink: {
		borderRight: `3px solid ${ theme.palette.secondary.main }`,
		color: theme.palette.secondary.main
	}
}))

export default useStyle