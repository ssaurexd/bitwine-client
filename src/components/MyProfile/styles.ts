import { makeStyles } from '@material-ui/core/styles'


const useStyle = makeStyles( ( theme ) => ({
	root: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: theme.spacing( 4 )
	},
	avatarContainer: {
		height: '100px',
		width: '100px',
		borderRadius: '100px',
		position: 'relative',
	},
	inputContainer: {
		width: '100%',
		height: '100%',
		marginTop: theme.spacing( 4 ),
		display: 'flex',
		flexDirection: 'column'
	},
	submitContainer: {
		marginTop: theme.spacing( 4 ),
		width: '50%',
		alignSelf: 'flex-end',
		[theme.breakpoints.down( 'sm' )]: {
			width: '100%'
		}
	},
	avatar: {
		width: '100%',
		height: '100%',
		borderRadius: '100px',
		objectFit: 'cover'
	},
	iconContainer: {
		position: 'absolute',
		width: 'auto',
		height: 'auto',
		top: '65px',
		left: '-20px',
		cursor: 'pointer',
		'&:hover svg': {
			color: theme.palette.action.active,
			transition: 'all ease 400ms'
		}
	}
}))

export default useStyle