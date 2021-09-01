import { FC } from 'react'
import Link from 'next/link'
import {
	CardMedia,
	CardContent,
	CardActions,
	CardActionArea,
	IconButton,
	Card,
	Typography
} from '@material-ui/core'
import { AddShoppingCart, Favorite } from '@material-ui/icons'

import useStyle from './styles'
import { IProduct } from '../../interfaces/productInterfaces'
import { getLinkImage } from '../../helpers/helpers'


interface Props {
	product: IProduct
}

const OurProductCard: FC<Props> = ({ product }) => {

	/* hooks */
	const classes = useStyle()

	return (
		<Card className={ classes.card } key={ product._id } >
			<CardActionArea className={ classes.cardActionArea } >
				<Link href={ `/product/${ product.slug }` } >
					<a>
						<CardMedia className={ classes.cardMedia } image={ getLinkImage( product.image ) } />
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
	)
}

export default OurProductCard
