import { makeStyles, Theme } from '@material-ui/core/styles'


interface Props {
	imgSrc: string
}

const useStyle = makeStyles<Theme, Props>( ( theme ) => ({
	root: {
		width: '100%',
		height: '400px',
		margin: '10px 0 70px 0',
		backgroundImage: props => `url(${ props.imgSrc })`,
		backgroundSize: ' 100% 100% ',
		backgroundPosition: 'center center',
		backgroundRepeat: 'no-repeat'
	}
}))

export default useStyle