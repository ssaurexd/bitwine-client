import { makeStyles } from '@material-ui/core/styles'
import { globalStyles } from '../../../config/theme'

const { drawerWidth } = globalStyles
const useStyle = makeStyles( ( theme ) => ({
	paper: {
		width: '100%',
		height: 150,
		borderRadius: 4
	},
	paper2: {
		minWidth: 260,
		minHeight: 200,
		width: '100%',
		borderRadius: 4,
		position: 'relative',
	},
	chart: {
		width:'100% !important',
		height: '100% !important'
	}
}))

export default useStyle