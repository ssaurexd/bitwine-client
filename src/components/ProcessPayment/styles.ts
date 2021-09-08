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
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexWrap: 'wrap',
		margin: theme.spacing( 1, 0 )
	},
	imgProduct: {
		width: 50,
		height: 50,
		position: 'relative'
	},
	descProduct: {
		width: 230,
		display: 'flex',
		minHeight: 50,
		height: 'auto',
		flexDirection: 'column'
	}
}))

export default useStyle