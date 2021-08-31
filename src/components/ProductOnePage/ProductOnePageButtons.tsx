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
import { addItemStoreThunk, updateCountItemStoreThunk } from '../../redux/middlewares/storeMiddlewares'

import Counter from '../Counter/Counter'


interface Props {
	product: IProduct
}

const ProductOnePageButtons: FC<Props> = ({ product }) => {
	
	/* hooks */
	const classes = useStyle()
	const { items } = useAppSelector( state => state.store.shopCart )
	const [ count, setCount ] = useState<number>( 1 )
	const dispatch = useAppDispatch()

	/* state */
	const productInShopCart = items.filter( item => item._id === product._id )
	const isInShopCart: boolean = productInShopCart.length >= 1 ? true : false

	/* funtions */
	const handleAddItem = (  ) => {

		const item: IStoreItem = {
			_id: product._id,
			count,
			description: product.description,
			discount: product.discount,
			image: product.image,
			price: product.price,
			priceWithDiscount: product.priceWithDiscount,
			slug: product.slug,
			name: product.name
		}

		if( product.onStock <= count ) return
		else {

			if( isInShopCart ) {

				setCount( count + 1 )
				dispatch( updateCountItemStoreThunk({ count: count + 1, item, type: 'shopCart' }) )
			}
			else setCount( count + 1 )
		}
	}

	const handleRemoveItem = (  ) => {
		
		const item: IStoreItem = {
			_id: product._id,
			count,
			description: product.description,
			discount: product.discount,
			image: product.image,
			price: product.price,
			priceWithDiscount: product.priceWithDiscount,
			slug: product.slug,
			name: product.name
		}

		if( count <= 1 ) return
		else {

			if( isInShopCart ) {

				setCount( count - 1 )
				dispatch( updateCountItemStoreThunk({ count: count - 1, item, type: 'shopCart' }) )
			} else setCount( count - 1 )
		}
	}

	const onAddToShopCart = () => {
		
		const item: IStoreItem = {
			_id: product._id,
			count,
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
				{ isInShopCart && <Counter product={ product } onAdd={ handleAddItem } onRemove={ handleRemoveItem } counter={ count } /> }
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
