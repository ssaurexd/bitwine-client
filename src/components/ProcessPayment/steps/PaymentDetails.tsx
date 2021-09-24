import { FC } from 'react'
import {
	Button,
	Grid, 
	Paper, 
	Typography 
} from '@material-ui/core'

import useStyle from '../styles'
import TotalInfo from '../TotalInfo'


interface Props {
	onNextStep: () => void
	onGoBack: () => void
}
const PaymentDetails: FC<Props> = ({ onNextStep, onGoBack }) => {

	/* hooks */
	const classes = useStyle()
	

	return (
		<Grid container spacing={ 3 } >
			<Grid item xs={ 12 } md ={ 8 } >
				<Paper className={ classes.paperTotal } >
					<Typography variant='subtitle2' className={ classes.subTitle } color='textSecondary'>Dirección de envio: </Typography>
				</Paper>
			</Grid>
			<Grid container direction='column' item xs={ 12 } md={ 4 } >
				<Grid item xs >
					<Paper className={ classes.paperTotal } >
						<TotalInfo />
					</Paper>
				</Grid>

				<Grid container item xs justifyContent='space-between' direction='row' wrap='wrap'  >
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
							color='secondary' fullWidth 
							onClick={ onNextStep }
							className={ classes.mb3 }
						>
							Siguiente
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default PaymentDetails