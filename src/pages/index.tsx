import { GetServerSideProps, NextPage } from 'next'

import { IBannerProduct, IProduct } from '../interfaces/productInterfaces'

import Auth from '../components/init/Auth'
import Home from '../components/screens/Home'
import HeaderMain from '../components/HeaderMain'
import FooterMain from '../components/FooterMain'
import Layout from '../components/init/Layout'
import { useAppDispatch } from '../hooks/reduxHooks'
import { useEffect } from 'react'
import { initHome } from '../redux/slices/appSlice'
import { getFlashSales, getProducts, getProductsByCategory } from '../api/productApi'

interface Props {
	sales: IProduct[],
	pinkWine: IProduct[],
	banner: IProduct[],
	products: IProduct[]
}

const app: NextPage<Props> = ({ sales, pinkWine, banner, products }) => {

	const dispatch = useAppDispatch()

	useEffect( () => {
		
		dispatch( initHome({ 
			products: { 
				pinkWine,
				flashSale: sales, 
				sliderProducts: banner,
				products
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
	
	const [ salesResp, pinkWineResp, productsResp, bannerResp ] = await Promise.all([
		getFlashSales(),
		getProductsByCategory('pink-wine'),
		getProducts( 15, 0 ),
		getProductsByCategory('flash-sales', 4),
	])

	return {
		props: {
			sales: salesResp.ok ? salesResp.products : [],
			pinkWine: pinkWineResp.ok ? pinkWineResp.products : [],
			banner: bannerResp.ok ? bannerResp.products: [],
			products: productsResp.ok ? productsResp.products : []
		}
	}
}

export default app
