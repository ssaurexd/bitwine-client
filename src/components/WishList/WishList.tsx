import { FC } from 'react'
import {
	IconButton,
	Badge
} from '@material-ui/core'
import { Favorite } from '@material-ui/icons'
import { useAppSelector } from '../../hooks/reduxHooks'


const WishList: FC = () => {
	
	/* hooks */
	const { items } = useAppSelector( state => state.store.wishList )

	/* state */
	const totalItem = items.length
	
	/* funtions */

	return (
		<IconButton
			color='inherit'
		>
			<Badge badgeContent={ totalItem } color='primary' >
				<Favorite />
			</Badge>
		</IconButton>
	)
}

export default WishList
