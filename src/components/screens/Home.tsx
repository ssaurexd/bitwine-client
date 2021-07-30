import { FC } from 'react'

import ProductSliderMain from '../ProductSliderMain';
import Slider from '../Slider';

interface Props {
}

const Home: FC<Props> = ({}) => {
	
	return (
		<section>
			<ProductSliderMain />

			<Slider title='Ofertas Flash'/>
		</section>
	)
}

export default Home
