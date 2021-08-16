import { makeStyles } from '@material-ui/core/styles'
import { globalStyles } from '../../config/theme'


const useStyle = makeStyles( ( theme ) => ({
	root: {
		marginTop: globalStyles.navHeight + theme.spacing(6),
		minHeight: `calc( 100vh - ${ globalStyles.footerHeight } - ${ globalStyles.navHeight }px )`
	},
	container: {
	},
	miniSwiper: {
		height: 44
	},
	miniSwiperSlide: {
		position: 'relative',
		minHeight: 20,
		maxHeight: 40,
		width: '100%',
		maxWidth: 64,
		height: '100%',
		border: '1px solid #e1e1e1',
		borderRadius: theme.shape.borderRadius,
		'&:hover': {
			cursor: 'pointer'
		}
	},
	swiper: {
		minHeight: 200,
		height: 300,
		marginBottom: theme.spacing( 3 ),
		[theme.breakpoints.up( 'md' )]: {
			maxHeight: 600,
			height: 600
		},
		[theme.breakpoints.up( 'sm' )]: {
			height: 350
		}
	},
	swiperSlide: {
		position: 'relative',
		minHeight: 200,
		maxHeight: 400,
		width: '100%',
		height: '100%'
	},
	rate: {
		marginTop: theme.spacing( 3 )
	},
	gridContainer: {
		margin: theme.spacing( 3, 0 ),
		display: 'grid',
		[theme.breakpoints.up( 'xs' )]: {
			gridTemplateColumns: 'repeat( 2, 1fr )',
			gap: 20,
			justifyContent: 'center'
		},
		[theme.breakpoints.up( 'sm' )]: {
			gridTemplateColumns: 'repeat( 3, 1fr )'
		},
		[theme.breakpoints.up( 'md' )]: {
			gridTemplateColumns: 'repeat( 4, 1fr )'
		},
		[theme.breakpoints.up( 'lg' )]: {
			gridTemplateColumns: 'repeat( 5, 1fr )'
		},
	}
}))

export default useStyle