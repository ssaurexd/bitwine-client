import { FC, useState } from 'react'
import { 
	Button,
	Container 
} from '@material-ui/core'

import useStyle from './styles'

import ProcessPaymentStepper from './ProcessPaymentStepper'
import MyProducts from './steps/MyProducts'


const steps: string[] = [
	'Mis Productos', 
	'Dirección', 
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
	}

	return (
		<section className={ classes.root } >
			<Container>
				<ProcessPaymentStepper stepIndex={ stepIndex } steps={ steps } />
				{ stepIndex === 0 &&
					<MyProducts onNextStep={ onNextStep } />
				}
			</Container>
		</section>
	)
}

export default ProcessPayment
