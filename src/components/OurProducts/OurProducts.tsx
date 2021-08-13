import { FC } from 'react'
import Link from 'next/link'
import { 
	Card, 
	Container, 
	Grid, 
	Typography,
	CardMedia,
	CardContent,
	CardActions,
	CardActionArea,
	IconButton
} from '@material-ui/core'
import { AddShoppingCart, Favorite } from '@material-ui/icons'

import { useAppSelector } from '../../hooks/reduxHooks'
import { settings } from '../../config/settings'
import useStyle from './styles'

import CustomButtonLink from '../CustomButtonLink'


interface Props {
}

const OurProducts: FC = () => {

	/* hooks */
	const { products } = useAppSelector( state => state.app.home.products )
	const classes = useStyle()

	return (
		<Container>
			<Typography variant='h4' align='center' >
				Nuestros Productos
			</Typography>
			<section className={ classes.gridContainer } >
				{ products.map( product => (
					<Card className={ classes.card } key={ product._id } >
						<CardActionArea className={ classes.cardActionArea } >
							<Link href={ `/product/${ product.slug }` } >
								<a>
									<CardMedia className={ classes.cardMedia } image={`${ settings.BASE_PATH }/${ product.image }`} />
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
						text='Ver más'
						hreflink='/market'
						variant='text'
					/>
				</Grid>
			</Grid>
		</Container>
	)
}

export default OurProducts
