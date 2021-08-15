import { makeStyles } from '@material-ui/core/styles'


const useStyle = makeStyles( ( theme ) => ({
	root: {
		width: '100%',
		height: '500px',
		margin: '50px 0 10px 0',
		display: 'grid',
		position: 'relative',
		gridTemplateColumns: 'repeat( 1, 1fr )',
		justifyContent: 'space-between',
		gap: 10,
		[theme.breakpoints.up('md')]: {
			gridTemplateColumns: 'repeat( 2, 1fr )'
		}
	},
	imgContainer: {
		maxHeight: 400,
		width: '100%',
		position: 'relative'
	}
}))

export default useStyle