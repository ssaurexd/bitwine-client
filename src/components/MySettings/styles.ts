import { makeStyles } from '@material-ui/core/styles'
import { globalStyles } from '../../config/theme'


const useStyle = makeStyles( ( theme ) => ({
	root: {
		marginTop: globalStyles.navHeight + theme.spacing( 4 ),
		marginBottom: theme.spacing( 4 ),
		minHeight: `calc(100vh - ${ globalStyles.navHeight }px - ${ globalStyles.footerHeight })`,
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		display: 'flex',
		boxShadow: theme.shadows[2],
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column'
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