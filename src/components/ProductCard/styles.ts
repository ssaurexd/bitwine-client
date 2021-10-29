import { makeStyles } from '@material-ui/core/styles'


const useStyle = makeStyles( ( theme ) => ({
	productCard: {
		boxShadow: theme.shadows[2],
		transition: 'box-shadow ease 400ms',
		'&:hover': {
			boxShadow: theme.shadows[3]
		}
	},
	productCardShadow: {
		backgroundColor: 'transparent',
		boxShadow: 'none'
	}
}))

export default useStyle