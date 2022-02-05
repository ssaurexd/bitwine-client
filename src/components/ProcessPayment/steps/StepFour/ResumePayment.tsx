import { FC, useEffect, useState } from 'react'

import { CircularProgress, Typography } from '@material-ui/core'

import { useAppSelector } from '../../../../hooks/reduxHooks'
import useStyle from '../../styles'


interface Props {
	
}
const ResumePayment: FC<Props> = () => {

	/* hooks */
	const classes = useStyle()
	const { items, shipment, total } = useAppSelector( state => state.store.shopCart )
	const [ isLoading, setIsLoading ] = useState( true )

	/* funtions */
	const showFinalMSG = (  ) => {
		
		return (
			<div>Hola mundo</div>
		)
	}

	const onPayment = async (  ) => {
		console.log('Hols desde on mount');
		
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