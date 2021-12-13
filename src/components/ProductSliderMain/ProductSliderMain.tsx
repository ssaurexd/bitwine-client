import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { IBanner } from '../../interfaces/bannerInterfaces'

import ProductCardSliderMain from './ProductCardSliderMain'


interface Props {
	products: IBanner[],
	lazy?: boolean
}

const ProductSliderMain: FC<Props> = ({ products, lazy = true }) => {
	return (
		<section className='product-slider-main' >
			<div className="product-slider-main__slider">
				<Swiper
					pagination={{
						clickable: true
					}}
					autoplay={{
						delay: 8000,
						disableOnInteraction: false	
					}}
					loop
					lazy={ lazy }
				>
					{ 	
						products.map(( product ) => (
							<SwiperSlide key={ product._id } >
								<ProductCardSliderMain product={ product } />
							</SwiperSlide>
						))
					}
				</Swiper>
			</div>
		</section>
	)
}

export default ProductSliderMain
