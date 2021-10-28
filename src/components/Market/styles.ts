import { makeStyles } from '@material-ui/core/styles'
import { globalStyles } from '../../config/theme'


const useStyle = makeStyles( ( theme ) => ({
	marketRoot: {
		marginTop: globalStyles.navHeight + theme.spacing( 4 )
	},
	sortPaper: {
		padding: theme.spacing( 2 ),
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	productPaper: {
		display: 'grid',
		[theme.breakpoints.up( 'xs' )]: {
			gridTemplateColumns: 'repeat( 1, 1fr )',
			gap: 20,
			justifyContent: 'center'
		},
		[theme.breakpoints.up( 'sm' )]: {
			gridTemplateColumns: 'repeat( 2, 1fr )'
		},
		[theme.breakpoints.up( 'md' )]: {
			gridTemplateColumns: 'repeat( 3, 1fr )'
		},
		[theme.breakpoints.up( 'lg' )]: {
			gridTemplateColumns: 'repeat( 3, 1fr )'
		},
	},
	mt: {
		marginTop: theme.spacing( 6 )
	},
	mr: {
		marginRight: theme.spacing( 3 )
	}
}))


export default useStyle