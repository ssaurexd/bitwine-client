import { FC } from 'react'

import Auth from '../components/init/Auth'
import Home from '../components/screens/Home'
import HeaderMain from '../components/HeaderMain'
import FooterMain from '../components/FooterMain'
import { GetServerSideProps, NextPage } from 'next'
import { IBannerProduct, IProduct } from '../interfaces/product'

interface Props {
	sales: IProduct[],
	best: IProduct[],
	banner: IBannerProduct[]
}

const App: NextPage<Props> = ({ sales, best, banner }) => {

	return (
		<Auth
			admitedRoles={ ['user'] }
			redirectTo={ '/login' }
			needToRedirect={ false }
		>
			<>
				<main className='main-100-vh' >
					<HeaderMain 
						title='El mejor mercado en linea para comprar vinos'
						subTitle='Vinos para los amantes del vino'
						showBtn={ true }
						bottomShadow={ true }
					/>

					<Home sales={ sales } best={ best } banner={ banner } />
				</main>

				<FooterMain />
			</>
		</Auth>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	
	const [ sales, best, banner ] = await Promise.all([
		fetch( 'https://fakestoreapi.com/products?limit=12', { method: 'GET' } ),
		fetch( 'https://fakestoreapi.com/products?limit=12', { method: 'GET' } ),
		fetch( 'https://fakestoreapi.com/products?limit=4', { method: 'GET' } ),
	])
	const [ salesJson, bestJson, bannerJson ] = await Promise.all([
		sales.json(),
		best.json(),
		banner.json()
	])

	return {
		props: {
			sales: salesJson,
			best: bestJson,
			banner: bannerJson
		}
	}
}

export default App
