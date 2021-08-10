import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IBannerProduct } from '../../interfaces/productInterfaces'
import ProductCardSliderMain from './ProductCardSliderMain'


interface Props {
	products: IBannerProduct[]
}

const ProductSliderMain: FC<Props> = ({ products }) => {
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
				>
					{ 	
						products.map(( product ) => (
							<SwiperSlide key={ product.id } >
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
