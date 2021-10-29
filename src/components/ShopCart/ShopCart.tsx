import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
	IconButton,
	Badge,
	Drawer,
	List,
	ListItem,
	Typography,
	Divider
} from '@material-ui/core'
import { Close, Delete, ShoppingCart } from '@material-ui/icons'

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import useStyle from './styles'
import { getLinkImage } from '../../helpers/helpers'
import CustomButtonLink from '../CustomButtonLink'
import { deleteItemStoreThunk } from '../../redux/middlewares/storeMiddlewares'


const ShopCart: FC = () => {
	
	/* hooks */
	const { items } = useAppSelector( state => state.store.shopCart )
	const [ openDrawer, setOpenDrawer ] = useState( false )
	const classes = useStyle()
	const dispatch = useAppDispatch()

	/* state */
	const totalItem = items.length

	/* funtions */
	const deleteShopCartItem = ( productId: string ) => {
		
    	dispatch( deleteItemStoreThunk({ productId, type: 'shopCart' }) )
	}

	return (
		<div>
			<IconButton
				color='inherit'
				onClick={ () => setOpenDrawer( true ) }
			>
				<Badge badgeContent={ totalItem } color='primary' >
					<ShoppingCart />
				</Badge>
			</IconButton>

			<Drawer
				anchor='right'
				open={ openDrawer }
				onClose={ () => setOpenDrawer( false ) }
				className={ classes.shopCartDrawer }
				classes={{
					paper: classes.drawerPaper
				}}
			>	
				<div>
					<div className={ classes.closeContainser } >
						<IconButton onClick={ () => setOpenDrawer( false ) } >
							<Close />
						</IconButton>
					</div>
					<List >
						{ totalItem >= 1 &&
							<ListItem>
								<CustomButtonLink
									hreflink='/process-payment'
									text='Terminar de comprar'
									fullWidth
									size='small'
									variant='contained'
								/>
							</ListItem>
						}
						{
							items.map(( prod, index ) => (
								<div key={ prod._id } >
									<ListItem className={ classes.listItem } >
										<div className={ classes.imgProduct } >
											<Image
												src={ getLinkImage( prod.image ) }
												layout='fill'
												objectFit='contain'
												alt={ prod.name }
											/>
										</div>
										<div className={ classes.descProduct } >
											<Link href={ `/product/${ prod.slug }` } passHref={ true } >
												<Typography onClick={ () => setOpenDrawer( false ) } component='a' variant='body1' >{ prod.name }</Typography>
											</Link>
											<Typography variant='body2' >Cantidad: { prod.count }</Typography>
											<Typography variant='body2' color='primary' >${ prod.priceWithDiscount }</Typography>
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
					</List>
				</div>
			</Drawer>
		</div>
	)
}

export default ShopCart
