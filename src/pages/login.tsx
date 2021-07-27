import Auth from '../components/init/Auth'
import Login from '../components/screens/Login'
import HeaderMain from '../components/HeaderMain'
import FooterMain from '../components/FooterMain'


const login = ( ) => {

	return (
		<Auth
			admitedRoles={ ['none'] }
			needToRedirect={ false }
			redirectTo={ '/' }
		>
			<>
				<main>
					<HeaderMain 
						title='Iniciar sesión'
						subTitle='Unete al más grande comunidad de amantes del vino'
					/>
					
					<Login />
				</main>

				<FooterMain />
			</>
		</Auth>
	)
}

export default login
