import { makeStyles } from '@material-ui/core/styles'


const useStyle = makeStyles( ( theme ) => ({
	root: {
		display:'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		alignItems: 'center',
		width: '100px',
		justifyContent: 'space-between',
		fontSize: '1.4rem'
	}
}))

export default useStyle