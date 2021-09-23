import { FC } from 'react'
import Image from 'next/image'
import { 
	ListItem,
	Typography,
	IconButton,
	Divider,
	Grid,
	Paper,
	Button
} from '@material-ui/core'
import { Delete } from '@material-ui/icons'

import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { deleteItemStoreThunk } from '../../../redux/middlewares/storeMiddlewares'
import { getLinkImage } from '../../../helpers/helpers'
import useStyle from '../styles'

import Counter from '../../Counter/Counter'


interface Props {
	onNextStep: () => void
}

const MyProducts: FC<Props> = ({ onNextStep }) => {

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
		<Grid container wrap='wrap-reverse' spacing={ 3 } >
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
											/>
										</div>
										<div className={ classes.descProduct } >
											<Typography variant='body1' >{ prod.name }</Typography>
											<Typography variant='body2' >Cantidad: { prod.count }</Typography>
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
			</Grid>
			<Grid item xs={ 12 } md ={ 4 } >
				<Paper>
					<div className={ classes.total } >
						<Typography variant='subtitle1' >Total: </Typography>
						<Typography variant='subtitle2' >${ total }</Typography>
					</div>
				</Paper>
				<Button
					fullWidth
					size='small'
					color='secondary'
					variant='contained'
					onClick={ onNextStep }
				>
					Continuar
				</Button>
			</Grid>
		</Grid>
	)
}

export default MyProducts
