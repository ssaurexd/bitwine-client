import { GetServerSideProps, NextPage } from 'next'

import { IBannerProduct, IProduct } from '../interfaces/product'

import Auth from '../components/init/Auth'
import Home from '../components/screens/Home'
import HeaderMain from '../components/HeaderMain'
import FooterMain from '../components/FooterMain'
import Layout from '../components/init/Layout'
import { useAppDispatch } from '../hooks/reduxHooks'
import { useEffect } from 'react'
import { initHome } from '../redux/slices/appSlice'

interface Props {
	sales: IProduct[],
	best: IProduct[],
	banner: IBannerProduct[]
}

const app: NextPage<Props> = ({ sales, best, banner }) => {

	const dispatch = useAppDispatch()

	useEffect( () => {
		
		dispatch( initHome({ 
			products: { 
				bestSales: best,
				flashSale: sales, 
				sliderProducts: banner
			} 
		}))
	}, [])

	return (
		<Auth
			admitedRoles={ ['user', 'admin', 'guest'] }
		>
			<Layout>
				<main className='main-100-vh' >
					<HeaderMain 
						title='El mejor mercado en linea para comprar vinos'
						subTitle='Vinos para los amantes del vino'
						showBtn={ true }
						bottomShadow={ true }
					/>

					<Home />
				</main>

				<FooterMain />
			</Layout>
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

export default app
