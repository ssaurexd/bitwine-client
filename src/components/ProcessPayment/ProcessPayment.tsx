import { FC, useState } from 'react'
import {
	Container, 
	Dialog, 
	DialogActions, 
	DialogContent,
	Paper,
	Typography
} from '@material-ui/core'

import useStyle from './styles'

import ProcessPaymentStepper from './ProcessPaymentStepper'
import MyProducts from './steps/stepOne/MyProducts'
import PaymentDetails from './steps/stepTwo/PaymentDetails'
import ShipmentDetails from './steps/stepThree/ShipmentDetails'
import ResumePayment from './steps/StepFour/ResumePayment'
import Btn from '../Btn'
import { useAppSelector } from '../../hooks/reduxHooks'
import { userAddNewAddress } from '../../api/userApi'


const steps: string[] = [
	'Mis Productos', 
	'Detalles', 
	'Forma de pago'
]

interface Props {}
const ProcessPayment: FC<Props> = () => {

	/* hooks */
	const classes = useStyle()
	const { isLoggedIn, _id: uid } = useAppSelector( state => state.user )
	const { paymentInfo: { stepTwo } } = useAppSelector( state => state.app )
	const [ stepIndex, setStepIndex ] = useState( 0 )
	const [ isDialogToSaveAddressOpen, setIsDialogToSaveAddressOpen ] = useState( false )
	const [ isSavingAddress, setIsSavingAddress ] = useState( false )

	/* funtions */
	const onNextStep = (  ) => {
		
		switch ( stepIndex ) {
			case 1:
				( isLoggedIn ) ? setIsDialogToSaveAddressOpen( true ) : setStepIndex( stepIndex + 1 )
				break;
		
			default:
				setStepIndex( stepIndex + 1 )
				break;
		}
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

	const handleContinueWithotSavingAddress = (  ) => {
		setStepIndex( stepIndex + 1 )
		setIsDialogToSaveAddressOpen( false )
	}

	const onSaveAddress = async (  ) => {
		
		setIsSavingAddress( true )

		const { ok } = await userAddNewAddress( stepTwo, uid )

		if( ok ) {
			setIsSavingAddress( true )
			setIsDialogToSaveAddressOpen( false )
			setStepIndex( stepIndex + 1 )
		}
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

				{ stepIndex === 2 &&
					<ShipmentDetails onNextStep={ onNextStep } onGoBack={ onGoBack } />
				}	
				{ stepIndex === 3 &&
					<Paper >
						<ResumePayment />
					</Paper>
				}
			</Container>

			<Dialog
				open={ isDialogToSaveAddressOpen }
				onClose={ () => !isSavingAddress && setIsDialogToSaveAddressOpen( false ) }
			>
				<DialogContent>
					<Typography variant='h5' style={{ fontWeight: 'normal' }} >¿Quieres guardar esta dirección?</Typography>
				</DialogContent>
				<DialogActions>
					<Btn 
						title='No, Continuar sin guardar'
						variant='text'
						color='secondary'
						disableElevation
						onClick={ handleContinueWithotSavingAddress }
						disabled={ isSavingAddress }
					/>
					<Btn 
						title='Si, Guardar'
						variant='text'
						color='primary'
						disableElevation
						onClick={ onSaveAddress }
						isLoading={ isSavingAddress }
					/>
				</DialogActions>
			</Dialog>
		</section>
	)
}

export default ProcessPayment
