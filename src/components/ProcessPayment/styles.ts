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
		backgroundColor: '#fff',
		borderRadius: theme.shape.borderRadius,
		boxShadow: theme.shadows[1],
		margin: theme.spacing( 3, 0 )
	},
	subTitle: {
		marginBottom: 20,
		textTransform: 'uppercase'
	},
	/* --START-- MyProducts
	-------------------------------------------------------- */
	listItem: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexWrap: 'nowrap',
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
		paddingRight: theme.spacing( 1 ),
		marginBottom: theme.spacing( 2 ),
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
	underline: {
		textDecoration: 'line-through'
	},
	/* --END-- MyProducts
	-------------------------------------------------------- */

	/* --START-- PaymentDetails
	-------------------------------------------------------- */
	paperTotal: {
		display: 'flex',
		flexDirection: 'column',
		padding: theme.spacing( 2 ),
		marginBottom: theme.spacing( 2 ),
		'& .swiper-container':  {
			width: '100%',
			height: '100%',
		},
		'& .swiper-wrapper':  {
			width: '100%',
			height: '100%',
		},
		'& .swiper-pagination-bullet-active ': {
			backgroundColor: '#800'
		}
	},
	totalBox: {
		width: '100%',
		display: 'flex',
		flexWrap: 'nowrap',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: theme.spacing( 2 )
	},
	mb3: {
		marginBottom: theme.spacing( 3 )
	},
	/* --END-- PaymentDetails
	-------------------------------------------------------- */

	/* --START-- ShipmentDetails
	-------------------------------------------------------- */
	acordion: {
		marginBottom: theme.spacing( 3 ),
		padding: theme.spacing( 2 ),
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	/* --END-- ShipmentDetails
	-------------------------------------------------------- */

	/* --START-- paying
	-------------------------------------------------------- */
	rootPaying: {
		width: '100%',
		height: '100%',
		padding: theme.spacing( 2 ),
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column'
	},
	msgSucess: {
		color: 'green',
		fontSize: '4rem',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	msgError: {
		color: 'red',
		fontSize: '4rem',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	}
	/* --END-- paying
	-------------------------------------------------------- */
}))

export default useStyle