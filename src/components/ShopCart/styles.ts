import { makeStyles } from '@material-ui/core/styles'


const useStyle = makeStyles( ( theme ) => ({
	shopCartDrawer: {
		width: 330,
	},
	drawerPaper: {
		width: 330,
	},
	closeContainser: {
		display: 'flex',
		justifyContent: 'flex-end',
		marginBottom: theme.spacing( 2 )
	},
	listItem: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
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