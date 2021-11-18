import { FC, useState } from 'react'
import {
	IconButton,
	Button
} from '@material-ui/core'
import {
	Favorite,
	AddShoppingCart
} from '@material-ui/icons'

import useStyle from './styles'
import { IProduct } from '../../interfaces/productInterfaces'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { IStoreItem } from '../../interfaces/storeIntergaces'
import { addItemStoreThunk } from '../../redux/middlewares/storeMiddlewares'

import Counter from '../Counter'


interface Props {
	product: IProduct
}

const ProductOnePageButtons: FC<Props> = ({ product }) => {
	
	/* hooks */
	const classes = useStyle()
	const { items } = useAppSelector( state => state.store.shopCart )
	const dispatch = useAppDispatch()

	/* state */
	const productInShopCart = items.filter( item => item._id === product._id )
	const isInShopCart: boolean = productInShopCart.length >= 1 ? true : false

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
		<section>
			<div className={ classes.cartContainer } >
				<div >
					<IconButton disabled={ isInShopCart } onClick={ onAddToShopCart }>
						<AddShoppingCart />
					</IconButton>
					<IconButton>
						<Favorite />
					</IconButton>
				</div>
				{ isInShopCart && <Counter productId={ product._id } /> }
			</div>
			<Button
				color='secondary'
				variant='contained'
				fullWidth
			>
				Proceder a pagar
			</Button>
		</section>
	)
}

export default ProductOnePageButtons
