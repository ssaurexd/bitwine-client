import { FC, useEffect, useState } from 'react'
import {
	IconButton,
	Badge
} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { useAppSelector } from '../../hooks/reduxHooks'


const ShopCart: FC = () => {
	
	/* hooks */
	const { items } = useAppSelector( state => state.store.shopCart )

	/* state */
	const totalItem = items.length
	
	/* funtions */

	return (
		<IconButton
			color='inherit'
		>
			<Badge badgeContent={ totalItem } color='primary' >
				<ShoppingCart />
			</Badge>
		</IconButton>
	)
}

export default ShopCart
