import { lazy, Suspense } from 'react'
import { NextPage, GetStaticProps } from 'next'

import { getCategories } from '../../../api/categoryApi'
import { ICategory } from '../../../interfaces/categoryInterfaces'

import AdminLayout from '../../../components/Admin/Layout'
import Auth from '../../../components/init/Auth'
const CreateProduct = lazy( () => import( '../../../components/Admin/Product/CreateProduct' ) )



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
				<Suspense fallback={ 'Loading' } >
					<CreateProduct categories={ categories } />
				</Suspense>
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
