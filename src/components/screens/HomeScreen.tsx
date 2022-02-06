import { FC } from 'react'

import { useAppSelector } from '../../hooks/reduxHooks'

import ProductSliderMain from '../ProductSliderMain'
import Slider from '../Slider'
import WhyChooseUs from '../WhyChooseUs'
import OurProducts from '../OurProducts'
import Ads from '../Ads'


interface Props {
}

const HomeScreen: FC<Props> = () => {

	const { products } = useAppSelector( state => state.app.home )
	
	return (
		<>
			<ProductSliderMain products={ products.sliderProducts } lazy={ false } />
			<WhyChooseUs />

			<Slider lazy={ false } products={ products.flashSale } title='Ofertas Flash' category='flash-sales' />
			<Slider lazy={ false } products={ products.pinkWine } title='Vino Rosa' category='pink-wine' />

			<Ads />
			<OurProducts />
		</>
	)
}

export default HomeScreen
