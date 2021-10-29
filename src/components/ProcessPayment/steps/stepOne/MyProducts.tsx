import { FC } from 'react'
import Image from 'next/image'
import { 
	ListItem,
	Typography,
	IconButton,
	Grid,
	Paper,
	Button
} from '@material-ui/core'
import { Delete } from '@material-ui/icons'

import { useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks'
import { deleteItemStoreThunk } from '../../../../redux/middlewares/storeMiddlewares'
import { getLinkImage } from '../../../../helpers/helpers'
import useStyle from '../../styles'

import Counter from '../../../Counter'
import TotalInfo from '../../TotalInfo'


interface Props {
	onNextStep: () => void
}

const MyProducts: FC<Props> = ({ onNextStep }) => {

	/* hooks */
	const { items } = useAppSelector( state => state.store.shopCart )
	const dispatch = useAppDispatch()
	const classes = useStyle()

	/* funtions */
	const deleteShopCartItem = ( productId: string ) => {
		
    	dispatch( deleteItemStoreThunk({ productId, type: 'shopCart' }) )
	}

	return (
		<Grid container spacing={ 3 } wrap='wrap-reverse' >
			<Grid item xs={ 12 } md ={ 8 } >
				<div className={ classes.gridItemsContainer } >
					{
						items.map(( prod, index ) => (
							<Paper key={ prod._id } className={ classes.paperListItemContainer } >
								<ListItem className={ classes.listItem } >
									<div className={ classes.descContainer } >
										<div className={ classes.imgProduct } >
											<Image
												src={ getLinkImage( prod.image ) }
												layout='fill'
												objectFit='contain'
												alt={ prod.name }
											/>
										</div>
										<div className={ classes.descProduct } >
											<Typography variant='body1' >{ prod.name }</Typography>
											<Typography variant='body2' >Cantidad: { prod.count }</Typography>
											{ prod.discount > 0 &&
												<Typography variant='body2' className={ classes.underline } >${ prod.price }</Typography>
											}
											<Typography variant='body2' color='primary' >${ prod.priceWithDiscount }</Typography>
											<Counter productId={ prod._id } />
										</div>
									</div>
									<div>
										<IconButton onClick={ () => deleteShopCartItem( prod._id ) } size='small' >
											<Delete />
										</IconButton>
									</div>
								</ListItem>
							</Paper>
						))
					}

				</div>
				<Button
					fullWidth
					size='small'
					color='secondary'
					variant='contained'
					disabled={ items.length > 0 ? false : true }
					onClick={ onNextStep }
					className={ classes.mb3 }
				>
					Siguiente
				</Button>
			</Grid>
			<Grid item xs={ 12 } md ={ 4 } >
				<Paper className={ classes.paperTotal } >
					<TotalInfo />
				</Paper>
			</Grid>
		</Grid>
	)
}

export default MyProducts
