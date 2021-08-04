import { NextPage } from 'next'

import Auth from '../../components/init/Auth'
import Admin from '../../components/screens/Admin'


const index: NextPage = () => {

	return (
		<Auth
			admitedRoles={['admin']}
			redirectTo='/'
		>
			<Admin />
		</Auth>
	)
}

export default index
