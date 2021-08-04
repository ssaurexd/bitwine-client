import { FC } from 'react'
import { useAppSelector } from '../../hooks/reduxHooks'

import { IBannerProduct, IProduct } from '../../interfaces/product'

import ProductSliderMain from '../ProductSliderMain'
import Slider from '../Slider'
import WhyChooseUs from '../WhyChooseUs'

interface Props {
}

const Home: FC<Props> = () => {

	const { products } = useAppSelector( state => state.app.home )
	
	return (
		<>
			<ProductSliderMain products={ products.sliderProducts } />
			<WhyChooseUs />
			<Slider products={ products.flashSale } title='Ofertas flash'/>
			<Slider products={ products.bestSales } title='Lo más vendido'/>
		</>
	)
}

export default Home
