import { FC } from 'react'
import { Container } from '@material-ui/core'

import Auth from '../components/init/Auth'
import Layout from '../components/init/Layout'
import Market from '../components/Market'


interface Props {
	
}
const market: FC<Props> = () => {

	return (
		<Auth
			admitedRoles={ ['admin', 'guest', 'user'] }
		>
			<Layout haveHeader={ false } >
				<Container>
					<Market />
				</Container>
			</Layout>
		</Auth>
	)
}

export default market