import { makeStyles, ThemeOptions } from '@material-ui/core/styles'


interface Props {
}
const useStyle = makeStyles( ( theme ) => ({
	paperDialog: {
		alignItems: 'flex-start'
	},
	dialogContent: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column'
	}
}))


export default useStyle