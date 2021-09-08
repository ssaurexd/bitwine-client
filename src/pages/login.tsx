import Auth from '../components/init/Auth'
import LoginScreen from '../components/screens/LoginScreen'
import Layout from '../components/init/Layout'


const login = ( ) => {

	return (
		<Auth
			admitedRoles={ ['guest'] }
			redirectTo='/'
		>
			<Layout haveHeader >
				<main className='login-main' >
					<LoginScreen />
				</main>
			</Layout>
		</Auth>
	)
}

export default login
