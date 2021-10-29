import { FC, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import useStyle from './styles'
import { IProduct } from '../../interfaces/productInterfaces'
import { settings } from '../../config/settings'


interface Props {
	product: IProduct
}

const SliderOneProduct: FC<Props> = ({ product }) => {

	/* hooks */
	const classes = useStyle()
	const [ thumbsSwiper, setThumbsSwiper ] = useState<any>( null )

	return (
		<section >
			<Swiper
				spaceBetween={ 10 } 
				thumbs={{ swiper: thumbsSwiper }}
				className={ classes.swiper }
			>
				{ product.images.map( img => (
					<SwiperSlide key={ img } className={ classes.swiperSlide } >
						<Image 
							src={ `${ settings.BASE_PATH }/${ img }` }
							layout='fill'
							objectFit='contain'
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper 
				onSwiper={ slide => setThumbsSwiper( slide ) } 
				spaceBetween={ 10 } 
				slidesPerView={ 4 } 
				freeMode={ true } 
				watchSlidesVisibility={ true } 
				watchSlidesProgress={ true } 
				className={ classes.miniSwiper }
			>
				{ product.images.map( img => (
					<SwiperSlide key={ img } className={ classes.miniSwiperSlide } >
						<Image 
							src={ `${ settings.BASE_PATH }/${ img }` }
							layout='fill'
							objectFit='contain'
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default SliderOneProduct
