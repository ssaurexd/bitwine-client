import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductCardSliderMain from './ProductCardSliderMain'

const fakeData: Array<any> = [ '','','','','','','','','','','','','', ]

const ProductSliderMain: FC = () => {
	return (
		<section className='product-slider-main' >
			<div className="product-slider-main__slider">
				<Swiper
					pagination={{
					}}
					navigation={ true }
				>
					{ 	
						fakeData.map(( item, index ) => (
							<SwiperSlide key={ index } >
								<ProductCardSliderMain />
							</SwiperSlide>
						))
					}
				</Swiper>
			</div>
		</section>
	)
}

export default ProductSliderMain