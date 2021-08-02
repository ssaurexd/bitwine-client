import { makeStyles } from '@material-ui/core/styles'


const useStyle = makeStyles( theme => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff',
	},
}))

export default useStyle