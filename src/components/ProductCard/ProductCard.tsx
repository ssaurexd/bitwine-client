import { FC } from 'react'
import Image from 'next/image'
import {
	AddShoppingCart,
	Favorite 
} from '@material-ui/icons'
import { IconButton, Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'

import useStyle from './styles'
import { IProduct } from '../../interfaces/productInterfaces'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { openToast } from '../../redux/slices/appSlice'
import { addItemStoreThunk } from '../../redux/middlewares/storeMiddlewares'
import { IStoreItem } from '../../interfaces/storeIntergaces'
import { getLinkImage } from '../../helpers/helpers'

import CustomButtonLink from '../CustomButtonLink'


interface Props {
	product: IProduct,
}

const ProductCard: FC<Props> = ({ product }) => {

	const haveDiscount = product.discount > 0 ? true : false 

	/* hooks */
	const classes = useStyle()
	const dispatch = useAppDispatch()

	/* funtions */

	const onAddToWishList = () => {
		
		dispatch( openToast({
			isOpen: true,
			msg: 'Producto agregado a tu lista de deseos',
			duration: 2000,
			severity: 'success'
		}))
	}

	const onAddToShopCart = () => {
		
		const item: IStoreItem = {
			_id: product._id,
			count: 1,
			description: product.description,
			discount: product.discount,
			image: product.image,
			price: product.price,
			priceWithDiscount: product.priceWithDiscount,
			slug: product.slug,
			name: product.name
		}

		dispatch( addItemStoreThunk({ item, type: 'shopCart' }) )
	}

	return (
		<div className={`product-card ${ classes.productCard }`} >
			<div className="product-card__header">
				<div className="product-card__header__extra-info">
					{ haveDiscount ?
						<div className="product-card__header__extra-info__discount">
							<span>-{ product.discount }% off</span>
						</div> : <span></span>
					}

					<div className="product-card__header__extra-info__icons">
						<IconButton
							size='small'
							onClick={ onAddToShopCart }
						>
							<AddShoppingCart fontSize='medium' />
						</IconButton>
						
						<IconButton
							size='small'
							onClick={ onAddToWishList }
						>
							<Favorite fontSize='medium'/>
						</IconButton>
					</div>
				</div>

				<div className="product-card__header__image">
					<Image 
						src={ getLinkImage( product.image ) }
						layout='fill'
						objectFit='contain'
						className='product-card__header__image-img'
						alt={ product.name }
					/>
				</div>
			</div>

			<div className="product-card__body">
				<Rating defaultValue={ 4 } max={ 5 } size='small' readOnly />
				<div className="product-card__body__title">
					<Typography variant='h6' >{ product.name.slice( 0, 40 ) } { product.name.length > 40 && '...' }</Typography>
				</div>
			</div>

			<div className="product-card__footer">
				<div className="product-card__footer__prices">
					{ product.discount > 0 && <span className='second-price' >${ product.price }</span> } 
					<span className='main-price' >${ product.discount > 0 ? product.priceWithDiscount : product.price }</span>
				</div>
				
				<CustomButtonLink
					hreflink={`/product/${ product.slug }`}
					text='Comprar'
					variant='outlined'
					color='primary'
					size='small'
				/>
			</div>
		</div>
	)
}

export default ProductCard
