import { FC } from 'react'
import { Container } from '@material-ui/core'

import Auth from '../components/init/Auth'
import Layout from '../components/init/Layout'
import MarketLayout from '../components/Market'


interface Props {
	
}
const Market: FC<Props> = () => {

	return (
		<Auth
			admitedRoles={ ['admin', 'guest', 'user'] }
		>
			<Layout haveHeader={ false } >
				<Container>
					<MarketLayout />
				</Container>
			</Layout>
		</Auth>
	)
}

export default Market