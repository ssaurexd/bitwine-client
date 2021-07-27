import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
	Pagination
  } from 'swiper/core';
import { Container } from '@material-ui/core';

interface Props {
	dataResp?: object
}

SwiperCore.use([Pagination]);

const Home: FC<Props> = ({ dataResp }) => {
	
	return (
		<Container>
			<Swiper 
				slidesPerView={3} 
				spaceBetween={30} 
				freeMode={true} 
				pagination={{
					"clickable": true
				}} 
				className="mySwiper"
			>
				<SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				<SwiperSlide>Slide 5</SwiperSlide>
				<SwiperSlide>Slide 6</SwiperSlide>
				<SwiperSlide>Slide 7</SwiperSlide>
				<SwiperSlide>Slide 8</SwiperSlide>
				<SwiperSlide>Slide 9</SwiperSlide>
			</Swiper>
		</Container>
	)
}

export default Home
