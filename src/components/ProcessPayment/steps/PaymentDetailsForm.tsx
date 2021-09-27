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

import useStyle from '../styles'
import { useAppSelector } from '../../../hooks/reduxHooks'


export interface IInitialValues {
	name: string,
	lastName: string,
	street: string,
	houseNumber: string,
	zip: string,
	phone: string,
	email: string,
	country: string,
	suburb: string,
	delegation: string,
	state: string
}
interface Props {
	onGoBack: () => void,
	onNextStep: () => void
}
const PaymentDetailsForm: FC<Props> = ({ onGoBack, onNextStep }) => {

	/* hooks */
	const classes = useStyle()
	const { isLoggedIn, email } = useAppSelector( state => state.user )
	const formik = useFormik<IInitialValues>({
		initialValues: {
			country: '',
			email: isLoggedIn ? email : '',
			houseNumber: '',
			lastName: '',
			name: '',
			phone: '',
			street: '',
			zip: '',
			suburb: '',
			delegation: '',
			state: ''
		},
		onSubmit: ( values ) => {
        	console.log("🚀 ~ file: PaymentDetailsForm.tsx ~ line 52 ~ values", values)
			onNextStep()
		},
		validationSchema: yup.object({
			country: yup.string().trim().required('El país es necesario'),
			email: yup.string().required('El país es necesario'),
			houseNumber: yup.string().required('El país es necesario'),
			lastName: yup.string().required('El país es necesario'),
			name: yup.string().required('El país es necesario'),
			phone: yup.string().required('El Tel. Celular es necesario'),
			street: yup.string().required('El país es necesario'),
			zip: yup.string().required('El país es necesario'),
			suburb: yup.string().required('El país es necesario'),
			delegation: yup.string().required('El país es necesario'),
			state: yup.string().required('El país es necesario'),
		})
	})

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
								value={ formik.values.name }
								onChange={ formik.handleChange }
								onBlur={ formik.handleBlur }
								error={ formik.errors.name ? true : false }
								helperText={ formik.errors.name ? formik.errors.name : '' }
							/>
						</Grid>
						<Grid item xs={ 12 } md={ 6 } >
							<TextField 
								value={ formik.values.lastName }
								size='small'
								onChange={ formik.handleChange }
								label='Apellidos'
								name='lastName'
								fullWidth
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
								error={ formik.errors.phone ? true : false }
								helperText={ formik.errors.phone ? formik.errors.phone : '' }
							/>
						</Grid>
						{ !isLoggedIn &&
							<Grid item xs={ 12 } >
								<TextField 
									value={ formik.values.email }
									size='small'
									onChange={ formik.handleChange }
									label='Email'
									name='email'
									fullWidth
									margin='normal'
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
								value={ formik.values.name }
								size='small'
								onChange={ formik.handleChange }
								label='Nombre'
								name='name'
								fullWidth
							/>
						</Grid>
						<Grid item xs={ 12 } md={ 6 } >
							<TextField 
								value={ formik.values.lastName }
								size='small'
								onChange={ formik.handleChange }
								label='Apellidos'
								name='lastName'
								fullWidth
							/>
						</Grid>
						<Grid item xs={ 12 } >
							<TextField 
								value={ formik.values.phone }
								onChange={ formik.handleChange }
								size='small'
								label='Tel. Celular'
								name='phone'
								fullWidth
								margin='normal'
							/>
						</Grid>
						{ !isLoggedIn &&
							<Grid item xs={ 12 } >
								<TextField 
									value={ formik.values.email }
									size='small'
									onChange={ formik.handleChange }
									label='Email'
									name='email'
									fullWidth
									margin='normal'
								/>
							</Grid>
						}
					</Grid>
				</Grid>
			</Paper>

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