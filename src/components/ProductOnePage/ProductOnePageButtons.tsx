import { FC } from 'react'
import { useRouter } from 'next/router'
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
import { openToast } from '../../redux/slices/appSlice'

import Counter from '../Counter'


interface Props {
	product: IProduct
}

const ProductOnePageButtons: FC<Props> = ({ product }) => {
	
	/* hooks */
	const classes = useStyle()
	const { items } = useAppSelector( state => state.store.shopCart )
	const { isLoggedIn } = useAppSelector( state => state.user ) 
	const location = useRouter()
	const dispatch = useAppDispatch()

	/* state */
	const productInShopCart = items.filter( item => item._id === product._id )
	const isInShopCart: boolean = productInShopCart.length >= 1 ? true : false

	/* funtions */
	const onAddToWishList = () => {
		
		if( !isLoggedIn ) {

			location.push( '/signup' )
			return
		} 

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

		dispatch( addItemStoreThunk({ item, type: 'wishList' }) )
		dispatch( openToast({
			isOpen: true,
			msg: 'Producto agregado a tu lista de deseos',
			duration: 2000,
			severity: 'success'
		}))
	}

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

	const handleGoToPay = (  ) => {
		
		onAddToShopCart()
		location.push( '/process-payment' )
	}

	return (
		<section>
			<div className={ classes.cartContainer } >
				<div >
					<IconButton disabled={ isInShopCart } onClick={ onAddToShopCart }>
						<AddShoppingCart />
					</IconButton>
					<IconButton
						onClick={ onAddToWishList }
					>
						<Favorite />
					</IconButton>
				</div>
				{ isInShopCart && <Counter productId={ product._id } /> }
			</div>
			<Button
				color='secondary'
				variant='contained'
				fullWidth
				onClick={ handleGoToPay }
			>
				Proceder a pagar
			</Button>
		</section>
	)
}

export default ProductOnePageButtons
