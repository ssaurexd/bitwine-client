import { FC, useState } from 'react'
import Link from 'next/link'
import {
	TextField,
	Button,
	FormControlLabel,
	Checkbox,
	Grid,
	Container
} from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { Formik } from 'formik'

import useStyle from './styles'
import { userAuthLogin } from '../../helpers/userApi'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { logIn, logInStart, logInFail } from '../../redux/slices/userSlice'

import CustomDivider from '../CustomDivider'
import SocialButtons from './SocilaButtons'


interface FormValues {
	email: string
	password: string,
	rememberMe: boolean
}

const LoginForm: FC = () => {

	/* hooks */
	const classes = useStyle()
	const dispath = useAppDispatch()
	const user = useAppSelector( state => state.user )

	/* state */
	const initialValues: FormValues = {
		email: 'ssaurexd@gmail.com',
		password: '',
		rememberMe: false
	}
	const [ msgError, setMsgError ] = useState<string | undefined>( '' )

	/* funtions */
	const _Submit = async ( values: FormValues ) => {

		const { ok, user, msg } = await userAuthLogin( values )
		
		dispath( logInStart() )

		if( ok ) { 

			dispath( logIn({ ...user, isLoggedIn: true }) )
			
			if( values.rememberMe ) localStorage.setItem('rememberMe', JSON.stringify( values.rememberMe ) )
		} else {

			dispath( logInFail() )
			setMsgError( msg )
		}
	}

	return (
		
		<Container component="div" maxWidth="xs">
			<div className={ classes.paper }>
				<Formik
					initialValues={ initialValues }
					onSubmit={ ( values ) => _Submit( values ) }
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
								variant="outlined"
								color='primary'
								margin="normal"
								fullWidth
								label="Email"
								placeholder='ejemplo@ejemplo.com'
								name="email"
								autoComplete="email"
								autoFocus
								size='small'
								error={ errors.email ? true : false }
								value={ values.email }
								onChange={ handleChange }
							/>

							<TextField
								variant="outlined"
								color='primary'
								margin="normal"
								fullWidth
								name="password"
								label="Contraseña"
								type="password"
								size='small'
								autoComplete="current-password"
								error={ errors.password ? true : false }
								value={ values.password }
								onChange={ handleChange }
							/>

							<FormControlLabel
								control={( 
									<Checkbox 
										color="primary"
										name='remenberMe' 
										value={ values.rememberMe }
										onChange={ handleChange }
									/>
								)}
								label="Recordarme"
							/>

							<Button
								type="submit"
								disabled={ user.loading }
								fullWidth
								variant="contained"
								color="primary"
								className={ classes.submit }
							>
								Iniciar Sesión
							</Button>

							<Grid container>
								<Grid item xs>
									<Link href="/" >
										<a className={ classes.link } >
											¿Olvidaste tu contraseña?
										</a>
									</Link>
								</Grid>

								<Grid item>
									<Link href='/' >
										<a className={ classes.link } >
											¿No tienes una cuenta? Unete al equipo aqui
										</a>
									</Link >
								</Grid>
							</Grid>

							<CustomDivider  middleInfo='O'/>

							<SocialButtons 
								onClickFacebook={ () => {} }
								onClickGoogle={ () => {} }
							/>
						</form>
					)}
				</Formik>
			</div>
    	</Container>
	)
}

export default LoginForm
