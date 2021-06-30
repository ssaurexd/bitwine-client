import Auth from '../components/init/Auth'
import Login from '../components/screens/Login'


const login = ( ) => {

	return (
		<Auth
			admitedRoles={ ['none'] }
			needToRedirect={ false }
			redirectTo={ '' }
		>
			<Login />
		</Auth>
	)
}

export default login
