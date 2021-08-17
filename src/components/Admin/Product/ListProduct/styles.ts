import { makeStyles } from '@material-ui/core/styles'


const useStyle = makeStyles( ( theme ) => ({
	title: {
		textTransform: 'uppercase',
		fontWeight:'bold',
		marginBottom: 20,
	},
	dataGrid: {
		height: 'auto',
		width: '100%',
		overflow: 'hidden'
	},
	appBar: {
		position: 'relative',
	},
}))

export default useStyle