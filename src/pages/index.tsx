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
				<main>
					<HeaderMain 
						title='BitBlog - Best API for getting a blog'
						subTitle='Make an API faster'
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
