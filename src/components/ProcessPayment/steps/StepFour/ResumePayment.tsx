import { FC, useEffect, useState } from 'react'

import { CircularProgress, Typography } from '@material-ui/core'

import { useAppSelector } from '../../../../hooks/reduxHooks'
import useStyle from '../../styles'
import { processPayment } from '../../../../api/salesApi'


interface Props {
	
}
const ResumePayment: FC<Props> = () => {

	/* hooks */
	const classes = useStyle()
	const { items, shipment } = useAppSelector( state => state.store.shopCart )
	const { _id, email, isLoggedIn } = useAppSelector( state => state.user )
	const { stepTwo: addressToSend } = useAppSelector( state => state.app.paymentInfo )
	const [ isLoading, setIsLoading ] = useState( true )

	/* funtions */
	const showFinalMSG = (  ) => {
		
		return (
			<div>Compra hecha correctamente</div>
		)
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