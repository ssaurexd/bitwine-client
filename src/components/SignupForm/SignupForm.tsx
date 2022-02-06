import { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import {
	TextField,
	Button,
	Grid,
	Container
} from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { Formik } from 'formik'
import * as Yup from 'yup'

import useStyle from '../LoginForm/styles'
import { userAuthSignup } from '../../api/userApi'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { logIn, signUpStart, signUpFail, resetLoading } from '../../redux/slices/userSlice'

import CustomDivider from '../CustomDivider'
import SocialButtons from '../LoginForm/SocialButtons'


interface FormValues {
	name: string,
	lastName: string,
	email: string
	password: string,
	repeatPassword: string
}
interface Props {
	
}

const SignupForm: FC<Props> = () => {

	/* hooks */
	const classes = useStyle()
	const dispath = useAppDispatch()
	const user = useAppSelector( state => state.user )

	/* state */
	const initialValues: FormValues = {
		email: '',
		password: '',
		lastName: '',
		name: '',
		repeatPassword: ''
	}
	const [ msgError, setMsgError ] = useState<string | undefined>( '' )

	/* efects */
	useEffect( () => {

		return () => { 
			dispath( resetLoading() ) 
		}
	}, [ dispath ])

	/* funtions */
	const _Submit = async ( values: FormValues ) => {

		dispath( signUpStart() )
		
		const { ok, user, msg, token } = await userAuthSignup( values )

		if( ok ) { 

			dispath( logIn({ ...user, isLoggedIn: true }) )
			localStorage.setItem( 'token', token )
		
		} else {

			dispath( signUpFail() )
			setMsgError( msg )
		}
	}

	return (
		
		<Container component="div" maxWidth="xs">
			<div className={ classes.paper }>
				<Formik
					initialValues={ initialValues }
					onSubmit={ ( values ) => _Submit( values ) }
					validationSchema={ Yup.object({
						email: Yup.string().trim().required('El email es obligatorio'),
						name: Yup.string().trim().required('El nombre es obligatorio'),
						password: Yup.string().trim().required('La contraseña es obligatoria'),
						repeatPassword: Yup.string().when('password', {
							is: ( val: string ) => ( val && val.length > 0 ? true : false ),
							then: Yup.string().oneOf(
								[Yup.ref('password')],
								'Las contraseñas tienen que ser iguales'
							)
						}).required('Campo obligatorio')
					}) }
				>
					{({
						errors,
						values,
						handleChange,
						handleSubmit
					}) => (
						<form className={ classes.form } onSubmit={ handleSubmit } >
							{ msgError &&
								<Alert variant='outlined' severity='error'>{ msgError }</Alert>
							}
							<TextField
								color='primary'
								margin="normal"
								fullWidth
								label="Nombre"
								placeholder=''
								name="name"
								helperText={ errors.name }
								error={ errors.name ? true : false }
								value={ values.name }
								onChange={ handleChange }
							/>

							<TextField
								color='primary'
								margin="normal"
								fullWidth
								label="Apellidos"
								placeholder=''
								name="lastName"
								value={ values.lastName }
								onChange={ handleChange }
							/>

							<TextField
								color='primary'
								margin="normal"
								fullWidth
								label="Email"
								placeholder='ejemplo@ejemplo.com'
								name="email"
								autoComplete="email"
								helperText={ errors.email }
								error={ errors.email ? true : false }
								value={ values.email }
								onChange={ handleChange }
							/>

							<TextField
								color='primary'
								margin="normal"
								fullWidth
								name="password"
								label="Contraseña"
								type="password"
								autoComplete="current-password"
								helperText={ errors.password }
								error={ errors.password ? true : false }
								value={ values.password }
								onChange={ handleChange }
							/>
							
							<TextField
								color='primary'
								margin="normal"
								fullWidth
								name="repeatPassword"
								label="Repite tu contraseña"
								type="password"
								autoComplete="current-password"
								helperText={ errors.repeatPassword }
								error={ errors.repeatPassword ? true : false }
								value={ values.repeatPassword }
								onChange={ handleChange }
							/>

							<Button
								type="submit"
								disabled={ user.loading }
								fullWidth
								variant="contained"
								color="primary"
								className={ classes.submit }
							>
								Registrarse
							</Button>

							<Grid container>
								<Grid item>
									<Link href='/login' >
										<a className={ classes.link } >
											¿Ya tienes una cuenta? Inicia sesión aqui
										</a>
									</Link >
								</Grid>
							</Grid>

							<CustomDivider  middleInfo='O'/>

							<SocialButtons 
								onClickFacebook={ () => {} }
								onClickGoogle={ () => {} }
								facebookText='Registrarte con Facebook'
								googleText='Registrarte con Google'
							/>
						</form>
					)}
				</Formik>
			</div>
    	</Container>
	)
}

export default SignupForm