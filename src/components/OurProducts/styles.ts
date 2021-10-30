import { makeStyles } from '@material-ui/core/styles'


const useStyle = makeStyles( ( theme ) => ({
	root: {
		marginBottom: theme.spacing( 6 )
	},
	cardActionArea: {
		paddingTop: 10
	},
	card: {
		maxWidth: 345,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	cardMedia: {
		height: 0,
		paddingTop: '56.25%',
		backgroundSize: 'contain !important'
	},
	gridContainer: {
		margin: theme.spacing( 3, 0 ),
		display: 'grid',
		[theme.breakpoints.up( 'xs' )]: {
			gridTemplateColumns: 'repeat( 2, 1fr )',
			gap: 20,
			justifyContent: 'center'
		},
		[theme.breakpoints.up( 'sm' )]: {
			gridTemplateColumns: 'repeat( 3, 1fr )'
		},
		[theme.breakpoints.up( 'md' )]: {
			gridTemplateColumns: 'repeat( 4, 1fr )'
		},
		[theme.breakpoints.up( 'lg' )]: {
			gridTemplateColumns: 'repeat( 5, 1fr )'
		},
	}
}))

export default useStyle