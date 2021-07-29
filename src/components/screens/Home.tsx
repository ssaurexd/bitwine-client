import { FC } from 'react'

import ProductSliderMain from '../ProductSliderMain';

interface Props {
	dataResp?: object
}

const Home: FC<Props> = ({ dataResp }) => {
	
	return (
		<section>
			<ProductSliderMain />
		</section>
	)
}

export default Home
