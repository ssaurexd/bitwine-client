import { lazy, Suspense } from 'react'
import { NextPage } from 'next'

import AdminLayout from '../../components/Admin/Layout'
import Auth from '../../components/init/Auth'
const Dashboard = lazy( () => import( '../../components/Admin/Dashboard' ) )


const indexAdmin: NextPage = () => {

	return (
		<Auth
			admitedRoles={['admin']}
			redirectTo='/'
		>
			<AdminLayout>
				<Suspense fallback={ 'Loadings' } >
					<Dashboard />
				</Suspense>
			</AdminLayout>
		</Auth>
	)
}

export default indexAdmin
