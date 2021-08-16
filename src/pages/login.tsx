import Auth from '../components/init/Auth'
import Login from '../components/screens/Login'
import Layout from '../components/init/Layout'


const login = ( ) => {

	return (
		<Auth
			admitedRoles={ ['guest'] }
			redirectTo='/'
		>
			<Layout haveHeader >
				<main className='login-main' >
					<Login />
				</main>
			</Layout>
		</Auth>
	)
}

export default login
