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
import { useAppDispatch } from '../../hooks/reduxHooks'
import { IStoreItem } from '../../interfaces/storeIntergaces'
import { addItemStoreThunk } from '../../redux/middlewares/storeMiddlewares'

import Counter from '../Counter/Counter'


interface Props {
	product: IProduct
}

const ProductOnePageButtons: FC<Props> = ({ product }) => {
	
	/* hooks */
	const classes = useStyle()
	const [ count, setCount ] = useState<number>( 1 )
	const dispatch = useAppDispatch()

	/* funtions */
	const handleAddItem = (  ) => {

		if( product.onStock <= count ) return
		else {

			setCount( count + 1 )
		}
	}

	const handleRemoveItem = (  ) => {
		
		if( count <= 1 ) return
		else {

			setCount( count - 1 )
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
				<Counter product={ product } onAdd={ handleAddItem } onRemove={ handleRemoveItem } counter={ count } />
				<div >
					<IconButton onClick={ onAddToShopCart }>
						<AddShoppingCart />
					</IconButton>
					<IconButton>
						<Favorite />
					</IconButton>
				</div>
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
