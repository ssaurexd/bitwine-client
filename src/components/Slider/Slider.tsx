import { FC, ReactElement } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Button, Container, Typography } from '@material-ui/core'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

import useStyle from './styles'
import ProductCard from '../ProductCard'
import { IProduct } from '../../interfaces/productInterfaces'


interface Props {
	title: string,
	titleIcon?: ReactElement,
	products: IProduct[]
}
const fakeData: Array<any> = [ '','','','','','','','','','','','' ]

const Slider: FC<Props> = ({ title, titleIcon, products }) => {

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
						<Button 
							variant='text'
							color='default'
							size='small'
							endIcon={ <ArrowRightIcon /> }
						>
							Ver todo
						</Button>
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
							<SwiperSlide key={ product.id } >
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
