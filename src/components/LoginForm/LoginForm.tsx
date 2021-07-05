import { FC } from 'react'
import Link from 'next/link'
import {
	TextField,
	Button,
	FormControlLabel,
	Checkbox,
	Grid,
	Container
} from '@material-ui/core'
import { Formik } from 'formik'

import useStyle from './styles'

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

	/* state */
	const initialValues: FormValues = {
		email: '',
		password: '',
		rememberMe: false
	}

	/* funtions */
	const _Submit = ( values: FormValues ) => {
		console.log(`values`, values)
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
							<TextField
								variant="outlined"
								color='secondary'
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
								color='secondary'
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
										color="secondary"
										name='remenberMe' 
										value={ values.rememberMe }
										onChange={ handleChange }
									/>
								)}
								label="Recordarme"
							/>

							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="secondary"
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
