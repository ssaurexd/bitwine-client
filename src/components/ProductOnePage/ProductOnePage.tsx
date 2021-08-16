import { FC, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
	Button, 
	Container, 
	Divider, 
	Typography,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	CardActionArea,
	IconButton, 
	Grid
} from '@material-ui/core'
import { Swiper, SwiperSlide } from 'swiper/react'

import { IProduct } from '../../interfaces/productInterfaces'
import useStyle from './styles'
import { settings } from '../../config/settings'
import { Rating } from '@material-ui/lab'
import { AddShoppingCart, Done, Error, Favorite } from '@material-ui/icons'
import OurProductCard from '../OurProducts/OurProductCard'


interface Props {
	product: IProduct,
	related: IProduct[]
}

const ProductOnePage: FC<Props> = ({ product, related }) => {

	/* state */
	const hasDiscount = product.discount > 0 ? true : false 
	const hasStock = product.onStock > 0 ? true : false 

	/* hooks */
	const [ thumbsSwiper, setThumbsSwiper ] = useState<any>( null )
	const classes = useStyle()

	/* funtions */
	const getCategories = () => {
		
		const categoriesToReturn = product.categories.filter( category => category.value !== 'flash-sales' ) 

		return categoriesToReturn.map( catgory => catgory.name )
	}
	
	return (
		<main className={ classes.root } >
			<Container className={ classes.container } >
				<Grid container justify='center' spacing={ 3 } >
					<Grid item xs={ 12 } md={ 6 } >
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
					</Grid>
					<Grid item container xs={ 12 } md={ 6 } >
						<Grid item >
							<section className={ classes.rate } >
								<Typography variant='h1' color='textPrimary' >{ product.name }</Typography>
								<div style={{
									display: 'flex',
									flexWrap: 'wrap',
									alignItems: 'center'
								}} >
									<Typography variant='subtitle1' >Calificación: </Typography>
									<Rating defaultValue={ 4 } max={ 5 } size='small' readOnly />
									<Typography variant='subtitle2' >({ product.rate.length })</Typography>
								</div>
								<div style={{
									display: 'flex',
									flexWrap: 'wrap',
									alignItems: 'center'
								}} >
									<Typography variant='subtitle1' >Categorias: </Typography> <Typography variant='subtitle2' >{ getCategories().join( ' / ' ) }</Typography>
								</div>
								{ hasDiscount && <Typography style={{
									textDecoration: 'line-through',
									textDecorationColor: 'inherit'
								}} variant='h5' color='textSecondary' >${ product.price }</Typography>}
								<Typography variant='h2' color='primary' >${ product.priceWithDiscount }</Typography>
								<div style={{
									display: 'flex',
									flexWrap: 'wrap',
									alignItems: 'center'
								}} >
									<Typography variant='subtitle1' >Disponible: </Typography> { hasStock ? <Done color='action' /> : <Error color='error' /> }
								</div>
							</section>
						</Grid>
						<Grid item >
							<section>
								<Button
									color='secondary'
									variant='contained'
									fullWidth
								>
									Agregar a favoritos
								</Button>
								<Button
									color='primary'
									variant='contained'
									fullWidth
								>
									Agregar a carrito
								</Button>
							</section>
						</Grid>
					</Grid>
					<Grid item xs  >
						<section>
							<Typography variant='h3' >Descripción</Typography>
							<Typography style={{ maxWidth: 800 }} component='div' dangerouslySetInnerHTML={{ __html: product.description }} />
						</section>
						<Divider />
						<section>
							<Typography variant='h3' >Productos relacionados</Typography>
							<section className={ classes.gridContainer } >
								{ related.map( product => (
									<OurProductCard key={ product._id } product={ product } />
								))}
							</section>
						</section>
					</Grid>
				</Grid>
			</Container>
		</main>
	)
}

export default ProductOnePage
