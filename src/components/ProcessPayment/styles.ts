import { makeStyles } from '@material-ui/core/styles'
import { globalStyles } from '../../config/theme'


const { navHeight } = globalStyles
const useStyle = makeStyles( ( theme ) => ({
	root: {
		marginTop: navHeight + theme.spacing( 2 ),
		position: 'relative'
	},
	stepperRoot: {
		width: '100%',
		backgroundColor: '#fafafa',
	},
	listItem: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexWrap: 'nowrap',
		margin: theme.spacing( 1, 0 )
	},
	paperListItemContainer: {
		margin: theme.spacing( 2, 0 ),
		'&:first-child': {
			marginTop: 0 - theme.spacing( 1 )
		}
	},
	gridItemsContainer: {
		overflowY: 'scroll',
		maxHeight: 700,
		boxSizing: 'border-box',
		padding: theme.spacing( 1 ),
		'&::-webkit-scrollbar': {
			width: 6
		},
		'&::-webkit-scrollbar-track': {
			backgroundColor: '#ccc',
			borderRadius: 25
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: '#9e9e9e',
			borderRadius: 25
		}
	},
	descContainer: {
		display: 'flex',
		justifyContent: 'flex-start',
	},
	imgProduct: {
		width: 50,
		height: 50,
		position: 'relative',
		alignSelf: 'center',
		[theme.breakpoints.up( 'sm' )]: {
			width: 100,
			height: 100
		}
	},
	descProduct: {
		width: '60%',
		display: 'flex',
		minHeight: 50,
		height: 'auto',
		flexDirection: 'column'
	},
	total: {
		margin: theme.spacing( 1, 0 ),
		padding: theme.spacing( 1 ),
		display: 'flex',
		flexWrap: 'nowrap',
		alignItems: 'center'
	}
}))

export default useStyle