import { FC } from 'react'
import { Backdrop, CircularProgress } from '@material-ui/core'

import useStyle from './styles'


interface Props {
	show: boolean
}

const GlobalLoading: FC<Props> = ({ show }) => {

	/* hooks */
	const classes = useStyle()

	return (
		<Backdrop className={ classes.backdrop } open={ show } >
			<CircularProgress color="inherit" />
		</Backdrop>
	)
}

export default GlobalLoading
