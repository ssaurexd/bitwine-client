import { ChangeEvent, FC, useEffect, useState } from 'react'
import { 
	Button, 
	Grid, 
	Paper,
	Typography,
	Radio,
	RadioGroup,
	FormControlLabel
} from '@material-ui/core'

import useStyle from '../../styles'
import TotalInfo from '../../TotalInfo'
import { useAppDispatch } from '../../../../hooks/reduxHooks'
import { addShipmentPrice } from '../../../../redux/slices/storeSlice'
import { IShipment } from '../../../../interfaces/storeIntergaces'


interface Props {
	onGoBack: () => void,
	onNextStep: () => void
}
const ShipmentDetails: FC<Props> = ({ onGoBack, onNextStep }) => {

	/* hooks */
	const classes = useStyle()
	const [ shipmentValue, setShipmentValue ] = useState({ id: 2, name: 'Fedex', price: 193 })
	const dispatch = useAppDispatch()

	/* state */
	const shipments: IShipment[] = [
		{ id: 0, name: 'DHL', price: 233 },
		{ id: 1, name: 'Paquete Express', price: 133 },
		{ id: 2, name: 'Fedex', price: 193 },
	]

	/* funtions */
	const onRadioChange = ( e: ChangeEvent<HTMLInputElement>, shipId: number ) => {

		setShipmentValue({ ...shipments[shipId] })
		dispatch( addShipmentPrice({ shipmentPrice: shipments[shipId] }) )
	}

	/* efects */
	useEffect( () => {

		dispatch( addShipmentPrice({ shipmentPrice: shipmentValue }) )
	}, [ dispatch, shipmentValue ])

	return (
		<Grid container spacing={ 3 } wrap='wrap-reverse' >
			<Grid item xs={ 12 } md ={ 8 } >
				<Grid item >
					<RadioGroup value={ shipmentValue.name } >
						{ shipments.map( item => (

							<Paper key={ item.name } className={ classes.acordion }>
								<FormControlLabel
									control={ <Radio value={ item.name } onChange={ ( e ) => onRadioChange( e, item.id ) } /> }
									label={ item.name }
								/>
								<div>
									<Typography variant='body2' color='textSecondary' >${ item.price }</Typography>
								</div>
							</Paper>
						))}
					</RadioGroup>
				</Grid>
				<Grid container item xs justifyContent='space-between' direction='row' wrap='wrap' >
					<Grid item xs={ 12 } md={ 5 } >
						<Button
							variant='outlined' 
							color='secondary' 
							fullWidth 
							onClick={ onGoBack }
							className={ classes.mb3 }
						>
							Regresar
						</Button>
					</Grid>
					<Grid item xs={ 12 } md={ 5 } >
						<Button 
							color='primary' 
							fullWidth
							className={ classes.mb3 }
							onClick={ onNextStep }
						>
							Pagar
						</Button>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={ 12 } md ={ 4 } >
				<Paper className={ classes.paperTotal } >
					<TotalInfo />
				</Paper>
			</Grid>
		</Grid>
	)
}

export default ShipmentDetails