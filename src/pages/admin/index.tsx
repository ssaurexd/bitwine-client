import { NextPage } from 'next'

import AdminLayout from '../../components/Admin/Layout'
import Auth from '../../components/init/Auth'
import Dashboard from '../../components/Admin/Dashboard'


const indexAdmin: NextPage = () => {

	return (
		<Auth
			admitedRoles={['admin']}
			redirectTo='/'
		>
			<AdminLayout>
				<Dashboard />
			</AdminLayout>
		</Auth>
	)
}

export default indexAdmin
