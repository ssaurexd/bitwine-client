import { FC } from 'react'

import { IBannerProduct, IProduct } from '../../interfaces/product'

import ProductSliderMain from '../ProductSliderMain'
import Slider from '../Slider'
import WhyChooseUs from '../WhyChooseUs'

interface Props {
	sales: IProduct[],
	best: IProduct[],
	banner: IBannerProduct[]
}

const Home: FC<Props> = ({ sales, banner, best }) => {
	
	return (
		<>
			<ProductSliderMain products={ banner } />
			<WhyChooseUs />
			<Slider products={ sales } title='Ofertas flash'/>
			<Slider products={ best } title='Lo más vendido'/>
		</>
	)
}

export default Home
