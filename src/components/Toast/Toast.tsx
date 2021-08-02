import { FC } from 'react'
import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

import useStyle from './styles'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { closeToast } from '../../redux/slices/appSlice'


const Toast: FC = () => {

	/* hooks */
	const { globalToast } = useAppSelector( state => state.app )
	const dispatch = useAppDispatch()
	const classes = useStyle()

	/* funtions */
	const _closeSnackBar = () => {
		
		dispatch( closeToast() )
	}


	return (
		<Snackbar
			open={ globalToast.isOpen }
			autoHideDuration={ globalToast.duration }
			onClose={ _closeSnackBar }
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right'
			}}
		>
			<Alert className={ classes.alert } elevation={ 3 } severity={ globalToast.severity } >{ globalToast.msg }</Alert>
		</Snackbar>
	)
}

export default Toast
