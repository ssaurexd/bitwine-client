import { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from './reduxHooks'
import {
	addItem
} from '../redux/slices/shopCartSlice'


const useShopCart = () => {

	/* hooks */
	const [ cartItems, setCartItems ] = useState<number>( 0 )
	const dispatch = useAppDispatch()
	const { items, total } = useAppSelector( state => state.shopCart )

	/* funtions */
	const addProductToCart = () => {
		
	}

	useEffect( () => {

	}, [])

	return {
		addProductToCart
	}
}

export default useShopCart
