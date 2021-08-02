import { FC, useEffect, useState } from 'react'
import {
	IconButton,
	Badge
} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'


const ShopCart: FC = () => {

	/* hooks */
	const [ countItemCart, setCountItemCart ] = useState<number>( 0 )
	
	/* funtions */
	useEffect( () => {

	}, [ countItemCart ])

	return (
		<IconButton
			color='inherit'
		>
			<Badge badgeContent={ countItemCart } color='primary' >
				<ShoppingCart />
			</Badge>
		</IconButton>
	)
}

export default ShopCart
