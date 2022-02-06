import { FC, useEffect, useState } from 'react'

import { CircularProgress, Typography } from '@material-ui/core'
import { ThumbUpAlt, Error } from '@material-ui/icons'

import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks'
import useStyle from '../../styles'
import { processPayment } from '../../../../api/salesApi'
import { resetStoreByType } from '../../../../redux/slices/storeSlice'
import { resetStoreByUIDType } from '../../../../api/storeApi'


interface Props {
	
}
const ResumePayment: FC<Props> = () => {

	/* hooks */
	const classes = useStyle()
	const { items, shipment } = useAppSelector( state => state.store.shopCart )
	const { _id, email, isLoggedIn } = useAppSelector( state => state.user )
	const { stepTwo: addressToSend } = useAppSelector( state => state.app.paymentInfo )
	const dispatch = useAppDispatch()
	const [ isLoading, setIsLoading ] = useState( true )
	const [ msg, setMsg ] = useState<'error' | 'sucess'>( 'sucess' )

	/* funtions */
	const showFinalMSG = ( ) => {
		
		switch ( msg ) {
			case 'error':
				return (
					<div className={ classes.msgError } >
						<Error color='inherit' fontSize='inherit' />
						<Typography variant='h5' color='textSecondary' >Oops! Algo salio mal.</Typography>
					</div>
				)
			case 'sucess':
				return (
					<div className={ classes.msgSucess } >
						<ThumbUpAlt  color='inherit' fontSize='inherit' />
						<Typography variant='body1' color='textSecondary' >Compra hecha correctamente</Typography>
					</div>
				)
		}

	}

	const onPayment = async (  ) => {
		
		const { ok } = await processPayment({ 
			email: isLoggedIn ? email : addressToSend.email,
			address: addressToSend,
			items,
			shipment,
			uid: isLoggedIn ? _id : undefined,  
		})

		if( ok ) {
			
			await resetStoreByUIDType( 'shopCart', _id )
			dispatch( resetStoreByType( 'shopCart' ) )
			setIsLoading( false )
		}
	}

	/* effects */
	useEffect( () => {

		onPayment()
	}, [])

	return (
		<div className={ classes.rootPaying } >
			{ isLoading && 
				<>
					<Typography variant='caption' >Por favor no cierres la pagina! Estamos procesando tu pedido.</Typography>
					<br />
					<CircularProgress />
				</>
			}
			{ !isLoading &&
				showFinalMSG()
			}	
		</div>
	)
}

export default ResumePayment