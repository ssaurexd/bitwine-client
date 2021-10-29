import { makeStyles } from '@material-ui/core/styles'


const useStyle = makeStyles( ( theme ) => ({
	paper: {
		height: 'auto',
		width: '100%',
		padding: theme.spacing( 3 ),
	},
	grid: {
		margin: theme.spacing( 3 )
	},
	title: {
		textTransform: 'uppercase',
		fontWeight:'bold',
		marginBottom: 20,
	},
	subTitle: {
		marginBottom: 20,
		textTransform: 'uppercase'
	},
	select: {
		width: '100%',
		height: 'auto'
	},
	selectSmall: {
		width: '100%',
		height: 42
	},
	description: {
		width: '100%'
	},
	drop: {
		border: 'none',
		backgroundColor: 'inherit'
	},
	btnContainer: {
		width: '100%'
	},
	chips: {
		display: 'flex',
      	flexWrap: 'wrap',
	},
	chip: {
		margin: 2
	}
}))

export default useStyle