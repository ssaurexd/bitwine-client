import { FC } from 'react'

import Auth from '../components/init/Auth'
import Home from '../components/screens/Home'
import HeaderMain from '../components/HeaderMain'
import FooterMain from '../components/FooterMain'


const App: FC = () => {

	return (
		<Auth
			admitedRoles={ ['user'] }
			redirectTo={ '/login' }
			needToRedirect={ false }
		>
			<>
				<main className='main-100-vh' >
					<HeaderMain 
						title='BitWine - Best market place to buy wines'
						subTitle='Wines for all wine lovers'
						showBtn={ true }
					/>

					<Home />
				</main>

				<FooterMain />
			</>
		</Auth>
	)
}

export default App
