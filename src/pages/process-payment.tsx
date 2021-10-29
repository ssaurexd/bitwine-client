import { NextPage } from 'next'

import FooterMain from '../components/FooterMain'
import Auth from '../components/init/Auth'
import Layout from '../components/init/Layout'
import ProcessPaymentLayout from '../components/ProcessPayment'


const ProcessPayment: NextPage = () => {

	return (
		<Auth
			admitedRoles={ ['admin', 'guest', 'user'] }
		>
			<Layout >
				<main className='main-100-vh' >
					<ProcessPaymentLayout />
				</main>
				<FooterMain />
			</Layout>
		</Auth>
	)
}

export default ProcessPayment
