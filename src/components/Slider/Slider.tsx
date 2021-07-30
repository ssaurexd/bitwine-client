import { FC, ReactElement } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Button, Container, Typography } from '@material-ui/core'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'

import useStyle from './styles'
import ProductCard from '../ProductCard'


interface Props {
	title: string,
	titleIcon?: ReactElement
}
const fakeData: Array<any> = [ '','','','','','','','','','','','' ]

const Slider: FC<Props> = ({ title, titleIcon }) => {

	/* hooks */
	const classes = useStyle()

	return (
		<Container>
			<section className='slider-main'>
				<div className="slider-main__title-container">
					<Typography variant='h4' > 
						{ titleIcon && titleIcon }
						{ title }
					</Typography>
					<Button 
						variant='text'
						color='primary'
						size='small'
						endIcon={ <ArrowRightIcon /> }
					>
						Ver todo
					</Button>
				</div>
				<Swiper
					slidesPerView={'auto'}
					spaceBetween={ 35 }
					pagination={ false }
					navigation={ true }
				>
					{
						fakeData.map(( item, index ) => (
							<SwiperSlide key={ index + 'P' } >
								<ProductCard  />
							</SwiperSlide>
						))
					}
				</Swiper>
			</section>
		</Container>
	)
}

export default Slider
