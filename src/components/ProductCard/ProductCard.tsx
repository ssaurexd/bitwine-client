import { FC, useState, useEffect } from 'react'
import Image from 'next/image'
import { 
	FavoriteBorder, 
	AddShoppingCart,
	Favorite 
} from '@material-ui/icons'
import { IconButton, Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'

import useStyle from './styles'
import defaultProduct from '../../../public/assets/images/products/default.png'
import { IProduct } from '../../interfaces/product'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { openToast } from '../../redux/slices/appSlice'

import CustomButtonLink from '../CustomButtonLink'


interface Props {
	product: IProduct, //TODO: Agregar interface de producto,
}

const ProductCard: FC<Props> = ({ product }) => {

	/* hooks */
	const classes = useStyle()
	const [ isOnWishList, setIsOnWishList ] = useState<boolean>( false )
	const [ haveDiscount, setHaveDiscount ] = useState<boolean>( true )
	const dispatch = useAppDispatch()

	/* funtions */
	const checkIsInWishList = ( productId: string ) =>  {
		
		const userWishList: [{ id: string }] = [{ id: '123' }]
		const isProductOnTheList = userWishList.find( item => item.id === productId )

		if( isProductOnTheList ) {
			return setIsOnWishList( true )
		}

		setIsOnWishList( false )
	}

	const onAddToWishList = () => {
		
		dispatch( openToast({
			isOpen: true,
			msg: 'Producto agregado a tu lista de deseos',
			duration: 2000,
			severity: 'success'
		}))
	}

	useEffect( () => {

		checkIsInWishList('123')
	}, [ isOnWishList ])

	return (
		<div className={`product-card ${ classes.productCard }`} >
			<div className="product-card__header">
				<div className="product-card__header__extra-info">
					{ haveDiscount ?
						<div className="product-card__header__extra-info__discount">
							<span>-100% off</span>
						</div> : <span></span>
					}

					<div className="product-card__header__extra-info__icons">
						<IconButton
							size='small'
						>
							<AddShoppingCart fontSize='default' />
						</IconButton>
						
						<IconButton
							size='small'
							onClick={ onAddToWishList }
						>
							{ isOnWishList
								? <Favorite fontSize='default' color='primary'/>
								: <FavoriteBorder fontSize='default' color='primary'/>
							}
						</IconButton>
					</div>
				</div>

				<div className="product-card__header__image">
					<Image 
						src={ product.image }
						layout='fill'
						objectFit='contain'
					/>
				</div>
			</div>

			<div className="product-card__body">
				<Rating defaultValue={ 4 } max={ 5 } size='small' readOnly />
				<div className="product-card__body__title">
					<Typography variant='h6' >{ product.title.slice( 0, 40 ) }{ product.title.length > 40 && '...' }</Typography>
					<Typography variant='body2' >
						{ product.description.slice( 0, 80 ) }{ product.description.length > 80 && '...' }
					</Typography>
				</div>
			</div>

			<div className="product-card__footer">
				<div className="product-card__footer__prices">
					<span className='second-price' >$250</span>
					<span className='main-price' >${ product.price }</span>
				</div>
				
				<CustomButtonLink
					hreflink={`/product/`}
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
