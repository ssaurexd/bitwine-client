import { NextPage } from 'next'

import AdminLayout from '../../components/Admin/Layout'
import Auth from '../../components/init/Auth'
import Admin from '../../components/screens/admin/Admin'


const indexAdmin: NextPage = () => {

	return (
		<Auth
			admitedRoles={['admin']}
			redirectTo='/'
		>
			<AdminLayout>
				<Admin />
			</AdminLayout>
		</Auth>
	)
}

export default indexAdmin
