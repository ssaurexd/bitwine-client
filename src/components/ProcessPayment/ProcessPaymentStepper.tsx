import { FC } from 'react'
import { 
	Stepper,
	useTheme,
	useMediaQuery,
	Box,
	Step,
	StepLabel,
	Paper
} from '@material-ui/core'

import useStyle from './styles';


interface Props {
	stepIndex: number,
	steps: string[]
}

const ProcessPaymentStepper: FC<Props> = ({ stepIndex, steps }) => {

	/* hooks */
	const classes = useStyle()
	const theme = useTheme()
	const gtSM = useMediaQuery( theme.breakpoints.up('sm') )

	return (
		<Stepper
			activeStep={ stepIndex }
			orientation={ gtSM ? 'horizontal' : 'vertical' }
			alternativeLabel={ gtSM ? true : false }
			className={ classes.stepperRoot }
		>
			{
				steps.map( step => (
					<Step key={ step } >
						<StepLabel>{ step }</StepLabel>
					</Step>
				))
			}
		</Stepper>
	)
}

export default ProcessPaymentStepper
