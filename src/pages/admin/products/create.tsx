import AdminLayout from '../../../components/Admin/Layout'
import Auth from '../../../components/init/Auth'
import CreateProduct from '../../../components/screens/admin/CreateProduct'


const createProduct = () => {

	return (
		<Auth
			admitedRoles={ ['admin'] }
			redirectTo='/'
		>
			<AdminLayout>
				<CreateProduct />
			</AdminLayout>
		</Auth>
	)
}

export default createProduct
