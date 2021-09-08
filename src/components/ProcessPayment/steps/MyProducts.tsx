import { FC } from 'react'
import Image from 'next/image'
import { 
	ListItem,
	Typography,
	IconButton,
	Divider,
	Grid
} from '@material-ui/core'
import { Delete } from '@material-ui/icons'

import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { deleteItemStoreThunk } from '../../../redux/middlewares/storeMiddlewares'
import { getLinkImage } from '../../../helpers/helpers'
import useStyle from '../styles'
import Counter from '../../Counter/Counter'
import { IStoreItem } from '../../../interfaces/storeIntergaces'


const MyProducts: FC = () => {

	/* hooks */
	const { items, total } = useAppSelector( state => state.store.shopCart )
	const dispatch = useAppDispatch()
	const classes = useStyle()

	/* state */
	const totalItem = items.length

	/* funtions */
	const deleteShopCartItem = ( productId: string ) => {
		
    	dispatch( deleteItemStoreThunk({ productId, type: 'shopCart' }) )
	}

	return (
		<Grid container wrap='wrap-reverse' >
			<Grid item xs={ 12 } md ={ 5 } >
				{
					items.map(( prod, index ) => (
						<div key={ prod._id } >
							<ListItem className={ classes.listItem } >
								<div className={ classes.imgProduct } >
									<Image
										src={ getLinkImage( prod.image ) }
										layout='fill'
										objectFit='contain'
									/>
								</div>
								<div className={ classes.descProduct } >
									<Typography variant='body1' >{ prod.name }</Typography>
									<Typography variant='body2' >Cantidad: { prod.count }</Typography>
									<Typography variant='body2' color='primary' >${ prod.priceWithDiscount }</Typography>
									<Counter productId={ prod._id } />
								</div>
								<div>
									<IconButton onClick={ () => deleteShopCartItem( prod._id ) } size='small' >
										<Delete />
									</IconButton>
								</div>
							</ListItem>

							{ ( index + 1 ) !== totalItem && <Divider variant='middle' /> }
						</div>
					))
				}
			</Grid>
			<Grid item xs={ 12 } md ={ 4 } >
				Total: { total }
			</Grid>
		</Grid>
	)
}

export default MyProducts
