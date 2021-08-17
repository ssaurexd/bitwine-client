import AdminLayout from '../../../components/Admin/Layout'
import ListProduct from '../../../components/Admin/Product/ListProduct'
import Auth from '../../../components/init/Auth'


const listProducts = () => {
	return (
		<Auth
			admitedRoles={ ['admin'] }
		>
			<AdminLayout>
				<ListProduct />
			</AdminLayout>
		</Auth>
	)
}

export default listProducts
