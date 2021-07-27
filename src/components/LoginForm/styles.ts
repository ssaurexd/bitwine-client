import { makeStyles } from '@material-ui/core/styles'


const useStyle = makeStyles( theme => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	link: {
		color: '#525252',
		fontSize: '1rem',
		transition: ' all ease .3s ',
		'&:hover': {
			color: theme.palette.primary.main
		}
	}
}))

export default useStyle