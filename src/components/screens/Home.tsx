import { 
	Card, 
	Container, 
	Grid, 
	Typography, 
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
	CardActionArea,
	IconButton
} from '@material-ui/core'
import { FC } from 'react'
import Link from 'next/link'

import { settings } from '../../config/settings'
import { useAppSelector } from '../../hooks/reduxHooks'
import defaultAdd from '../../../public/assets/images/defaultAdd.jpg'

import CustomButtonLink from '../CustomButtonLink'
import ProductSliderMain from '../ProductSliderMain'
import Slider from '../Slider'
import WhyChooseUs from '../WhyChooseUs'
import { AddShoppingCart, Favorite } from '@material-ui/icons'


interface Props {
}

const Home: FC<Props> = () => {

	const { products } = useAppSelector( state => state.app.home )
	
	return (
		<>
			<ProductSliderMain products={ products.sliderProducts } />
			<WhyChooseUs />

			<Slider products={ products.flashSale } title='Ofertas Flash'/>
			<Slider products={ products.pinkWine } title='Vino Rosa'/>

			<Container>
				<div className="add-main"
					style={{
						width: '100%',
						height: '400px',
						margin: '10px 0 70px 0',
						backgroundImage: `url(${ defaultAdd.src })`,
						backgroundSize: ' 100% 56.25% ',
						backgroundPosition: 'center center',
						backgroundRepeat: 'no-repeat'
					}}
				>

				</div>
			</Container>

			<Container>
				<Typography variant='h4' align='center' >
					Nuestros Productos
				</Typography>
				<section className='grid-container' >
					{ products.pinkWine.map( product => (
						<Card
							style={{
								maxWidth: 345,
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between'
							}}
						>
							<CardActionArea
								style={{
									paddingTop: '10px'
								}}
							>
								<Link href='/hpome' >
									<a>
										<CardMedia 
											style={{
												height: 0,
												paddingTop: '56.25%',
												backgroundSize: 'contain'
											}}
										image={`${ settings.BASE_PATH }/${ product.image }`} />
										<CardContent>
											<Typography variant='subtitle1' color='textSecondary' >
												{ product.name }
											</Typography>
										</CardContent>
									</a>
								</Link>
							</CardActionArea>

							<CardActions>
								<IconButton >
									<Favorite />
								</IconButton>
								<IconButton>
									<AddShoppingCart />
								</IconButton>
							</CardActions>
						</Card>
					))}
				</section>
				<Grid container justify='center' >
					<Grid item >
						<CustomButtonLink 
							text='Ver Todos'
							hreflink='/market'
							variant='text'
						/>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default Home
