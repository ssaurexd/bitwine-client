import { Container } from '@material-ui/core'

import { useAppSelector } from '../hooks/reduxHooks'

import Auth from '../components/init/Auth'
import Layout from '../components/init/Layout'
import FooterMain from '../components/FooterMain'


const WishList = () => {

	/* state */
	const { items } = useAppSelector( state => state.store.wishList )
    console.log("🚀 ~ file: wish-list.tsx ~ line 14 ~ WishList ~ items", items)

	return (
		<Auth
			admitedRoles={ ['admin', 'user'] }
		>
			<Layout>
				<Container>
					<main className='main-100-vh main-mt-nav' >
						{ items.map( prod =>  (
							<p key={ prod._id } >{ prod.name }</p>
						))}
					</main>
				</Container>

				<FooterMain />
			</Layout>
		</Auth>
	)
}

export default WishList