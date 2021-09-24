import { FC, useState } from 'react'
import {
	Container 
} from '@material-ui/core'

import useStyle from './styles'

import ProcessPaymentStepper from './ProcessPaymentStepper'
import MyProducts from './steps/MyProducts'
import PaymentDetails from './steps/PaymentDetails'


const steps: string[] = [
	'Mis Productos', 
	'Detalles', 
	'Facturación'
]

interface Props {}
const ProcessPayment: FC<Props> = () => {

	/* hooks */
	const classes = useStyle()
	const [ stepIndex, setStepIndex ] = useState( 0 )

	/* funtions */
	const onNextStep = (  ) => {
		
		setStepIndex( stepIndex + 1 )
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}
	const onGoBack = (  ) => {
		
		setStepIndex( stepIndex - 1 )
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	return (
		<section className={ classes.root } >
			<Container>
				<ProcessPaymentStepper stepIndex={ stepIndex } steps={ steps } />

				{ stepIndex === 0 &&
					<MyProducts onNextStep={ onNextStep } />
				}
				
				{ stepIndex === 1 &&
					<PaymentDetails onNextStep={ onNextStep } onGoBack={ onGoBack } />
				}
			</Container>
		</section>
	)
}

export default ProcessPayment
