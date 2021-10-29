import { NextPage, GetStaticProps } from 'next'

import { getCategories } from '../../../api/categoryApi'
import { ICategory } from '../../../interfaces/categoryInterfaces'

import AdminLayout from '../../../components/Admin/Layout'
import Auth from '../../../components/init/Auth'
import CreateProduct from '../../../components/Admin/Product/CreateProduct'


interface Props {
	categories: ICategory[]
}

const createProduct: NextPage<Props> = ({ categories }) => {

	return (
		<Auth
			admitedRoles={ ['admin'] }
			redirectTo='/'
		>
			<AdminLayout>
				<CreateProduct categories={ categories } />
			</AdminLayout>
		</Auth>
	)
}

export const getStaticProps: GetStaticProps = async () => {

	const categories = await getCategories()

	return {
		props: {
			categories
		}
	}
}

export default createProduct
