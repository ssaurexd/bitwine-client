import { makeStyles, Theme } from '@material-ui/core/styles'
import { globalStyles } from '../../config/theme'

interface StyleProps {
	height?: number
}

const useStyle = makeStyles<Theme, StyleProps>( ( theme ) => ({
	dropzone: {
		width: '100%',
		background: '#f6f6f6',
		minHeight: 200,
		height: props =>  props.height ? props.height : '100%',
		display: 'flex',
		borderRadius: globalStyles.shape.borderRadius2,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		padding: theme.spacing( 3 ),
		border: '2px dashed #ccc'
	},
	swiper: {
		width: '100%',
		height: 'auto',
		maxHeight: 200,
		maxWidth: 300,
	},
	swiperSlide: {
		textAlign: 'center',
		fontSize: 18,
		background: '#fff',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	dropzoneError: {
		borderColor: theme.palette.error.main,
	},
	imgContainer: {
		width: '100%',
		height: 'auto',
		maxHeight: 200,
		maxWidth: 250,
		borderRadius: globalStyles.shape.borderRadius2,
		marginTop: theme.spacing( 3 ),
		position: 'relative'
	},
	preview: {
		width: '100%',
		height: '100%',
		maxHeight: 200,
		maxWidth: 250,
		borderRadius: globalStyles.shape.borderRadius2
	},
	isDropping: {
		borderColor: '#9c9c9c',
		transition: 'all 200ms ease-in-out '
	},
	icon: {
		fontSize: 75,
		color: '#a8a8a8'
	},
	dropzoneCardContainer: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		marginTop: theme.spacing( 3 ),
		flexDirection: 'column'
	},
	card: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: theme.spacing(1),
		margin: theme.spacing( 1, 0),
		boxShadow: 'none',
		backgroundColor: '#f6f6f6'
	}
}))

export default useStyle