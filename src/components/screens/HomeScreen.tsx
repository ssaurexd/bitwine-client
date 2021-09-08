import { FC } from 'react'

import { useAppSelector } from '../../hooks/reduxHooks'

import ProductSliderMain from '../ProductSliderMain'
import Slider from '../Slider'
import WhyChooseUs from '../WhyChooseUs'
import OurProducts from '../OurProducts/OurProducts'
import Ads from '../Ads'


interface Props {
}

const HomeScreen: FC<Props> = () => {

	const { products } = useAppSelector( state => state.app.home )
	
	return (
		<>
			<ProductSliderMain products={ products.sliderProducts } />
			<WhyChooseUs />

			<Slider products={ products.flashSale } title='Ofertas Flash' category='flash-sales' />
			<Slider products={ products.pinkWine } title='Vino Rosa' category='pink-wine' />

			<Ads />
			<OurProducts />
		</>
	)
}

export default HomeScreen
