import { FC } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { 
	Button,
	Grid, 
	Paper, 
	TextField, 
	Typography,
} from '@material-ui/core'

import useStyle from '../../styles'
import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks'
import { IUserAddress } from '../../../../interfaces/user'
import { setStepTwoPaymentInfo } from '../../../../redux/slices/appSlice'

import Btn from '../../../Btn'


interface Props {
	onGoBack: () => void,
	onNextStep: () => void
}
const PaymentDetailsForm: FC<Props> = ({ onGoBack, onNextStep }) => {

	/* hooks */
	const classes = useStyle()
	const dispatch = useAppDispatch()
	const { isLoggedIn, email } = useAppSelector( state => state.user )
	const { paymentInfo } = useAppSelector( state => state.app )
	const formik = useFormik<IUserAddress>({
		initialValues: {
			...paymentInfo.stepTwo,
			email: isLoggedIn ? email : paymentInfo.stepTwo.email,
		},
		onSubmit: ( values ) => {
			handleSubmit( values )
			onNextStep()
		},
		validationSchema: yup.object({
			email: yup.string().email('Ingresa un email valido').required('El email es necesario'),
			houseNumber: yup.number().typeError('Ingresa un numero').required('El numero de tu casa es necesario'),
			lastName: yup.string(),
			name: yup.string().trim().required('El nombre es necesario'),
			phone: yup.number().typeError('Ingresa un numero').required('El Tel. Celular es necesario'),
			street: yup.string().required('La calles es requerida'),
			zip: yup.number().typeError('Ingresa un numero').required('El codigo postal es necesario'),
			suburb: yup.string().trim().required('La colonia es necesaria'),
			delegation: yup.string().trim().required('La delegación es necesaria'),
			state: yup.string().trim().required('El estado es necesario'),
		}),
		validateOnChange: true
	})

	/* funtions */
	const onSaveAddress = (  ) => {

		if( ( formik.isValid && formik.dirty ) ) {
			console.log('Entre aqui');
		}
	}

	const handleSubmit = ( values: IUserAddress ) => {
		
		dispatch( setStepTwoPaymentInfo( values ) )
	}
	
	return (
		<form method='POST' onSubmit={ formik.handleSubmit } >
			<Paper className={ classes.paperTotal } >
				<Typography variant='subtitle2' className={ classes.subTitle } color='textSecondary'>Datos de usuario: </Typography>
				<Grid container >
					<Grid item container spacing={ 1 } xs >
						<Grid item xs={ 12 } md={ 6 } >
							<TextField 
								size='small'
								label='Nombre'
								name='name'
								fullWidth
								margin='normal'
								value={ formik.values.name }
								onChange={ formik.handleChange }
								onBlur={ formik.handleBlur }
								error={ formik.touched.name && formik.errors.name ? true : false }
								helperText={ formik.touched.name && formik.errors.name ? formik.errors.name : '' }
							/>
						</Grid>
						<Grid item xs={ 12 } md={ 6 } >
							<TextField 
								size='small'
								label='Apellidos'
								name='lastName'
								fullWidth
								margin='normal'
								value={ formik.values.lastName }
								onChange={ formik.handleChange }
								onBlur={ formik.handleBlur }
							/>
						</Grid>
						<Grid item xs={ 12 } >
							<TextField 
								size='small'
								label='Tel. Celular'
								name='phone'
								fullWidth
								margin='normal'
								value={ formik.values.phone }
								onChange={ formik.handleChange }
								onBlur={ formik.handleBlur }
								error={ formik.touched.phone && formik.errors.phone ? true : false }
								helperText={ formik.touched.phone && formik.errors.phone ? formik.errors.phone : '' }
							/>
						</Grid>
						{ !isLoggedIn &&
							<Grid item xs={ 12 } >
								<TextField 
									size='small'
									label='Email'
									name='email'
									fullWidth
									margin='normal'
									value={ formik.values.email }
									onChange={ formik.handleChange }
									onBlur={ formik.handleBlur }
									error={ formik.touched.email && formik.errors.email ? true : false }
									helperText={ formik.touched.email && formik.errors.email ? formik.errors.email : '' }
								/>
							</Grid>
						}
					</Grid>
				</Grid>
			</Paper>

			<Paper className={ classes.paperTotal } >
				<Typography variant='subtitle2' className={ classes.subTitle } color='textSecondary'>Dirección de envio: </Typography>
				<Grid container >
					<Grid item container spacing={ 1 } xs >
						<Grid item xs={ 12 } md={ 6 } >
							<TextField 
								size='small'
								label='Calle'
								name='street'
								fullWidth
								margin='normal'
								value={ formik.values.street }
								onChange={ formik.handleChange }
								onBlur={ formik.handleBlur }
								error={ formik.touched.street && formik.errors.street ? true : false }
								helperText={ formik.touched.street && formik.errors.street ? formik.errors.street : '' }
							/>
						</Grid>
						<Grid item xs={ 12 } md={ 6 } >
							<TextField 
								size='small'
								label='Numero interior/exterior'
								name='houseNumber'
								fullWidth
								margin='normal'
								value={ formik.values.houseNumber }
								onChange={ formik.handleChange }
								onBlur={ formik.handleBlur }
								error={ formik.touched.houseNumber && formik.errors.houseNumber ? true : false }
								helperText={ formik.touched.houseNumber && formik.errors.houseNumber ? formik.errors.houseNumber : '' }
							/>
						</Grid>
						<Grid item xs={ 12 } >
							<TextField 
								size='small'
								label='Colonia'
								name='suburb'
								fullWidth
								margin='normal'
								value={ formik.values.suburb }
								onChange={ formik.handleChange }
								onBlur={ formik.handleBlur }
								error={ formik.touched.suburb && formik.errors.suburb ? true : false }
								helperText={ formik.touched.suburb && formik.errors.suburb ? formik.errors.suburb : '' }
							/>
						</Grid>
						<Grid item xs={ 12 } >
							<TextField 
								size='small'
								label='Codigo Postal'
								name='zip'
								fullWidth
								margin='normal'
								value={ formik.values.zip }
								onChange={ formik.handleChange }
								onBlur={ formik.handleBlur }
								error={ formik.touched.zip && formik.errors.zip ? true : false }
								helperText={ formik.touched.zip && formik.errors.zip ? formik.errors.zip : '' }
							/>
						</Grid>
						<Grid item xs={ 12 } >
							<TextField 
								size='small'
								label='Estado'
								name='state'
								fullWidth
								margin='normal'
								value={ formik.values.state }
								onChange={ formik.handleChange }
								onBlur={ formik.handleBlur }
								error={ formik.touched.state && formik.errors.state ? true : false }
								helperText={ formik.touched.state && formik.errors.state ? formik.errors.state : '' }
							/>
						</Grid>
						<Grid item xs={ 12 } >
							<TextField 
								size='small'
								label='Delegación'
								name='delegation'
								fullWidth
								margin='normal'
								value={ formik.values.delegation }
								onChange={ formik.handleChange }
								onBlur={ formik.handleBlur }
								error={ formik.touched.delegation && formik.errors.delegation ? true : false }
								helperText={ formik.touched.delegation && formik.errors.delegation ? formik.errors.delegation : '' }
							/>
						</Grid>
					</Grid>
				</Grid>
			</Paper>

			<Grid container item xs justifyContent='space-between' direction='row' wrap='wrap' >
				{ isLoggedIn && ( formik.isValid && formik.dirty ) &&
					<Grid item xs={ 12 } >
						<Btn 
							variant='contained' 
							color='primary' 
							onClick={ onSaveAddress }
							className={ classes.mb3 }
							title='Guardar dirección'
						/>
					</Grid>
				}
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
						color='secondary' 
						fullWidth
						className={ classes.mb3 }
						type='submit'
					>
						Siguiente
					</Button>
				</Grid>
			</Grid>
		</form>
	)
}

export default PaymentDetailsForm