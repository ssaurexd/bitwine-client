import { FC, useEffect, useState } from 'react'
import {
	IconButton,
	Badge
} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import useShopCart from '../../hooks/useShopCart'


const ShopCart: FC = () => {

	/* hooks */
	
	/* funtions */

	return (
		<IconButton
			color='inherit'
		>
			<Badge badgeContent={ 0 } color='primary' >
				<ShoppingCart />
			</Badge>
		</IconButton>
	)
}

export default ShopCart
