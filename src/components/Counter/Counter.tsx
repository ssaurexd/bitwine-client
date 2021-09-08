import { FC, useEffect, useState } from 'react'
import { 
	IconButton
} from '@material-ui/core'
import {	
	Remove,
	Add
} from '@material-ui/icons'

import useStyle from './styles'
import { IProduct } from '../../interfaces/productInterfaces'
import { IStoreItem } from '../../interfaces/storeIntergaces'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { updateCountItemStoreThunk } from '../../redux/middlewares/storeMiddlewares'
import { getProductStockById } from '../../api/productApi'


interface Props {
	productId: string,
}	

const Counter: FC<Props> = ({ productId }) => {

	/* hooks */
	const classes = useStyle()
	const dispatch = useAppDispatch()
	const { items } = useAppSelector( state => state.store.shopCart )
	const [ storeProduct, setStoreProduct ] = useState<IStoreItem>({
		_id: '',
		count: 1,
		description: '',
		discount: 0,
		image: '',
		name: '',
		price: 0,
		priceWithDiscount: 0,
		slug: ''
	})
	const [ count, setCount ] = useState<number>( 1 )
	const [ onStock, setOnStock ] = useState<number>( 1 )

	/* state */
	const productInShopCart = items.filter( item => item._id === productId )
	const isInShopCart: boolean = productInShopCart.length >= 1 ? true : false

	/* funtions */
	const handleAddItem = () => {

		const item: IStoreItem = {
			_id: storeProduct._id,
			count,
			description: storeProduct.description,
			discount: storeProduct.discount,
			image: storeProduct.image,
			price: storeProduct.price,
			priceWithDiscount: storeProduct.priceWithDiscount,
			slug: storeProduct.slug,
			name: storeProduct.name
		}

		if( onStock <= count ) return
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
			_id: storeProduct._id,
			count,
			description: storeProduct.description,
			discount: storeProduct.discount,
			image: storeProduct.image,
			price: storeProduct.price,
			priceWithDiscount: storeProduct.priceWithDiscount,
			slug: storeProduct.slug,
			name: storeProduct.name
		}

		if( count <= 1 ) return
		else {

			if( isInShopCart ) {

				setCount( count - 1 )
				dispatch( updateCountItemStoreThunk({ count: count - 1, item, type: 'shopCart' }) )
			} else setCount( count - 1 )
		}
	}

	const getProductStock = async (  ) => {
		
		const { ok, onStock } = await getProductStockById( productId )

		if( ok ) setOnStock( onStock )
		else return
	}

	useEffect( () => {
		
		const item = items.find( item => item._id === productId )!
		
		setStoreProduct( item )
		getProductStock()
	}, [ ])

	useEffect( () => {

		const item = items.find( item => item._id === productId )!
		setCount( item.count )
	}, [ productId ])

	return (
		<div className={ classes.root } >
			<IconButton
				size='small'
				color='secondary'
				onClick={ handleRemoveItem }
			>
				<Remove />
			</IconButton>
			<span>{ count }</span>
			<IconButton
				size='small'
				color='secondary'
				onClick={ handleAddItem }
			>
				<Add />
			</IconButton>
		</div>
	)
}

export default Counter
