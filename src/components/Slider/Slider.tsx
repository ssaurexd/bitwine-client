import { FC, ReactElement } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Container, Typography } from '@material-ui/core'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

import useStyle from './styles'
import { IProduct } from '../../interfaces/productInterfaces'

import ProductCard from '../ProductCard'
import CustomButtonLink from '../CustomButtonLink'


interface Props {
	title: string,
	titleIcon?: ReactElement,
	category: string,
	products: IProduct[]
}

const Slider: FC<Props> = ({ title, titleIcon, products, category }) => {

	/* hooks */
	const classes = useStyle()

	return (
		<Container>
			<section className='slider-main'>
				<div className="slider-main__title-container">
					<div className='divider'>
						<Typography variant='h4'> 
							{ titleIcon && titleIcon }
							{ title }
						</Typography>
					</div>

					<div className='see-more'>
						<CustomButtonLink 
							hreflink={ `/market?category=${ category }` }
							text='Ver todo'
							color='default'
							variant='text'
							size='small'
							endIcon={ <ArrowRightIcon /> }
						/>
					</div>
				</div>
				
				<Swiper
					slidesPerView={'auto'}
					spaceBetween={ 40 }
					pagination={ false }
					navigation={ true }
					lazy={ true }
				>
					{
						products.map(( product ) => (
							<SwiperSlide key={ product._id } >
								<ProductCard product={ product } />
							</SwiperSlide>
						))
					}
				</Swiper>
			</section>
		</Container>
	)
}

export default Slider
