import { lazy, Suspense } from 'react'

import AdminLayout from '../../../components/Admin/Layout'
import Auth from '../../../components/init/Auth'
const ListProduct = lazy( () => import( '../../../components/Admin/Product/ListProduct' ))

const listProducts = () => {
	return (
		<Auth
			admitedRoles={ ['admin'] }
		>
			<AdminLayout>
				<Suspense fallback={ 'Loading' } >
					<ListProduct />
				</Suspense>
			</AdminLayout>
		</Auth>
	)
}

export default listProducts
