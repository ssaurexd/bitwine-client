import { NextPage } from 'next'

import FooterMain from '../components/FooterMain'
import Auth from '../components/init/Auth'
import Layout from '../components/init/Layout'
import ProcessPayment from '../components/ProcessPayment'


const processPayment: NextPage = () => {

	return (
		<Auth
			admitedRoles={ ['admin', 'guest', 'user'] }
		>
			<Layout >
				<main className='main-100-vh' >
					<ProcessPayment />
				</main>
				<FooterMain />
			</Layout>
		</Auth>
	)
}

export default processPayment
