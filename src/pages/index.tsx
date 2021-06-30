import Auth from '../components/init/Auth'
import Home from '../components/screens/Home'


const App = () => {

	return (
		<Auth
			admitedRoles={ ['user'] }
			redirectTo={ '/login' }
			needToRedirect={ false }
		>
			<div>
				<Home />
				Ejemplo que si se puede jsjsj
			</div>
		</Auth>
	)
}

export default App
