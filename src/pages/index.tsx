import { FC } from 'react'

import Auth from '../components/init/Auth'
import Home from '../components/screens/Home'
import HeaderMain from '../components/HeaderMain'


const App: FC = () => {

	return (
		<Auth
			admitedRoles={ ['user'] }
			redirectTo={ '/login' }
			needToRedirect={ false }
		>
			<main>
				<HeaderMain />
				<Home />
			</main>
		</Auth>
	)
}

export default App
