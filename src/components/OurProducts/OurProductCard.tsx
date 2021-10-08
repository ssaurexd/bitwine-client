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
import { IStoreItem } from '../../interfaces/storeIntergaces'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { addItemStoreThunk } from '../../redux/middlewares/storeMiddlewares'


interface Props {
	product: IProduct
}

const OurProductCard: FC<Props> = ({ product }) => {

	/* hooks */
	const classes = useStyle()
	const dispatch = useAppDispatch()

	/* funtions */
	const onAddToShopCart = () => {
		
		const item: IStoreItem = {
			_id: product._id,
			count: 1,
			description: product.description,
			discount: product.discount,
			image: product.image,
			price: product.price,
			priceWithDiscount: product.priceWithDiscount,
			slug: product.slug,
			name: product.name
		}

		dispatch( addItemStoreThunk({ item, type: 'shopCart' }) )
	}

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
				<IconButton onClick={ onAddToShopCart } >
					<AddShoppingCart />
				</IconButton>
			</CardActions>
		</Card>
	)
}

export default OurProductCard
