import { makeStyles } from '@material-ui/core/styles'


const useStyle = makeStyles( ( theme ) => ({
	appBar: {
		flexGrow: 1,
		height: '80px'
	},
	toolBar: {
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1),
		height: '100%'
	},
	logo: {
		textDecoration: 'none',
		color: '#525252',
		with: 'auto',
		minHeight: '50px',
		minWidth: '50px'
	},
	menu: {
		color: '#525252'
	},
	colorWhite: {
		color: 'white'
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