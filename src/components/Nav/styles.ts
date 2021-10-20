import { makeStyles, Theme } from '@material-ui/core/styles'
import { globalStyles } from '../../config/theme'


interface Props {
	isScrolling: boolean,
}
const { drawerWidth } = globalStyles
const useStyle = makeStyles<Theme, Props>( ( theme ) => ({
	appBar: {
		flexGrow: 1,
		height: '80px',
		color: props => props.isScrolling ? '#fff' : '#525252'
	},
	toolBar: {
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1),
		height: '100%'
	},
	logo: {
		textDecoration: 'none',
		with: 'auto',
		minHeight: '50px',
		minWidth: '50px',
		position: 'relative'
	},
	drawerPaper: {
		width: drawerWidth,
		border: 'none',
		borderRight: '1px solid #f3f3f3',
	},
	drawerList: {
		flexGrow: 1,
		fontSize: '2rem'
	},
	active: {
		color: theme.palette.primary.main
	},
	active2: {
		'&::after': {
			left: '0 !important'
		}
	},
	navMain__link: {
		textDecoration: 'none',
		position: 'relative',
		textTransform: 'uppercase',
		overflow: 'hidden',
		display: 'inline-block',
		paddingBottom: '2px',
		color: 'inherit',
		
		'&::after': {
			content: '""',
			position: 'absolute',
			bottom: 0,
			left: '-100%',
			width: '100%',
			height: '2px',
			background: theme.palette.primary.main,
			transition: 'left .8s'
		},
		'&:hover': {
			'&::after': {
				left: 0
			}
		},
		'&:focus': {
			outline: 'none'
		}	
	},
	avatar: {
		borderColor: theme.palette.primary.main
	}
}))

export default useStyle