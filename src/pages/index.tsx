import { useEffect } from 'react'
import { GetServerSideProps, NextPage } from 'next'

import { IProduct } from '../interfaces/productInterfaces'
import { useAppDispatch } from '../hooks/reduxHooks'
import { initHome } from '../redux/slices/appSlice'
import { getFlashSales, getProducts, getProductsByCategory } from '../api/productApi'
import { getBannersForHome } from '../api/bannerApi'
import { IBanner } from '../interfaces/bannerInterfaces'

import Auth from '../components/init/Auth'
import HomeScreen from '../components/screens/HomeScreen'
import HeaderMain from '../components/HeaderMain'
import FooterMain from '../components/FooterMain'
import Layout from '../components/init/Layout'
import SEO from '../components/SEO'

interface Props {
	sales: IProduct[],
	pinkWine: IProduct[],
	banner: IBanner[],
	products: IProduct[]
}

const App: NextPage<Props> = ({ sales, pinkWine, banner, products }) => {

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
			<>
				<SEO
					desc='BitWine es el mejor mercado y lugar en linea para comprar vinos de la mejor calidad, para amantes del vino y quien busca relajarse o tener un buen acompañamiento con su comida, BitWine es segura y rapida.'
					title='BitWine - El mejor lugar para comprar vino'
					url='www.bitwine.com'
					urlImage='aquila urlejejej'
				/>
				<Layout haveHeader >
					<main className='main-100-vh' >
						<HeaderMain 
							title='El mejor mercado en linea para comprar vinos'
							subTitle='Vinos para los amantes del vino'
							showBtn={ true }
							bottomShadow={ true }
						/>

						<HomeScreen />
					</main>

					<FooterMain />
				</Layout>
			</>
		</Auth>
	)
}

export const getServerSideProps: GetServerSideProps<Props, any> = async () => {
	
	const [ salesResp, pinkWineResp, productsResp, bannerResp ] = await Promise.all([
		getFlashSales(),
		getProductsByCategory('pink-wine'),
		getProducts( 15, 0 ),
		getBannersForHome()
	])

	return {
		props: {
			sales: salesResp.ok ? salesResp.products : [],
			pinkWine: pinkWineResp.ok ? pinkWineResp.products : [],
			banner: bannerResp.ok ? bannerResp.banners: [],
			products: productsResp.ok ? productsResp.products : []
		}
	}
}

export default App
