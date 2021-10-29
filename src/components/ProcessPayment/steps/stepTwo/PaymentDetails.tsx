import { FC } from 'react'
import {
	Button,
	Grid, 
	Paper
} from '@material-ui/core'

import useStyle from '../../styles'
import TotalInfo from '../../TotalInfo'
import PaymentDetailsForm from './PaymentDetailsForm'


interface Props {
	onNextStep: () => void,
	onGoBack: () => void
}
const PaymentDetails: FC<Props> = ({ onNextStep, onGoBack }) => {

	/* hooks */
	const classes = useStyle()

	/* funtions */
	const onSubmit = ( ) => {
		
		console.log('Se hizo submit' );
	}

	return (
		<Grid container spacing={ 3 } wrap='wrap-reverse' >
			<Grid item xs={ 12 } md ={ 8 } >
				<PaymentDetailsForm onGoBack={ onGoBack } onNextStep={ onNextStep } />
			</Grid>

			<Grid container item xs={ 12 } md={ 4 } >
				<Grid item xs >
					<Paper className={ classes.paperTotal } >
						<TotalInfo />
					</Paper>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default PaymentDetails