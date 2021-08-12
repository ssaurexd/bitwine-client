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
import { getFlashSales, getProductsByCategory } from '../api/productApi'

interface Props {
	sales: IProduct[],
	pinkWine: IProduct[],
	banner: IBannerProduct[]
}

const app: NextPage<Props> = ({ sales, pinkWine, banner }) => {

	const dispatch = useAppDispatch()

	useEffect( () => {
		
		dispatch( initHome({ 
			products: { 
				pinkWine,
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
	
	const [ salesResp, pinkWineResp ] = await Promise.all([
		getFlashSales(),
		getProductsByCategory('pink-wine')
	])

	return {
		props: {
			sales: salesResp.ok ? salesResp.products : [],
			pinkWine: pinkWineResp.ok ? pinkWineResp.products : [],
			banner: []
		}
	}
}

export default app
