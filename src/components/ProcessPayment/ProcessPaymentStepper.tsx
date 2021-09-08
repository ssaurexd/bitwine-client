import { FC } from 'react'
import { 
	MobileStepper,
} from '@material-ui/core'

import useStyle from './styles';


interface Props {
	stepIndex: number,
	steps: string[]
}

const ProcessPaymentStepper: FC<Props> = ({ stepIndex, steps }) => {

	/* hooks */
	const classes = useStyle()

	return (
		<MobileStepper 
			className={ classes.stepperRoot }
			position='static'
			variant='dots'
			nextButton={
				<div></div>
			}
			backButton={
				<div></div>
			}
			steps={ steps.length }
			activeStep={ stepIndex }
		/>
	)
}

export default ProcessPaymentStepper
