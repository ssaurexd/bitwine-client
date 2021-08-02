import { useCallback, useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from './reduxHooks'
import {
	addItem,
	IShopCartItem
} from '../redux/slices/shopCartSlice'


const useShopCart = () => {

	/* hooks */
	const [ cartItems, setCartItems ] = useState<number>( 0 )
	const dispatch = useAppDispatch()
	const { items, total } = useAppSelector( state => state.shopCart )

	/* funtions */
	const onAddToShopCart = useCallback( () => {
		
		const item: IShopCartItem = {
			count: 1,
			id: 'wjhd937dh923h',
			image: 'https://ksajd.com',
			price: 55,
			title: 'Producto de ejemplo'
		}
		
		localStorage.setItem( 'shopCart', JSON.stringify([ item ]) )
	}, [ ])
	
	const getItems = useCallback( () => {

		const items = localStorage.getItem('shopCart') || []
		console.log("🚀 ~ file: useShopCart.tsx ~ line 25 ~ useEffect ~ items", items)
		setCartItems( items.length )
	}, [ ])

	useEffect( () => {

		getItems()
	}, [ cartItems ])

	return {
		onAddToShopCart,
		cartItems
	}
}

export default useShopCart
