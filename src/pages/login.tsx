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
						subTitle='Configura tus requerimiento y empieza a disfrutar de tu blog'
						bannerImage='https://foxhillsgolfclub.com.au/content/uploads/2017/07/members-login-banner.jpg'
					/>
					
					<Login />
				</main>

				<FooterMain />
			</>
		</Auth>
	)
}

export default login
