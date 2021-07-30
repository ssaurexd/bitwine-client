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

import CustomButtonLink from '../CustomButtonLink'


interface Props {
	product?: any, //TODO: Agregar interface de producto,
}

const ProductCard: FC<Props> = ({ product }) => {

	/* hooks */
	const classes = useStyle()
	const [ isOnWishList, setIsOnWishList ] = useState<boolean>( false )
	const [ haveDiscount, setHaveDiscount ] = useState<boolean>( true )

	/* funtions */
	const checkIsInWishList = ( productId: string ) =>  {
		
		const userWishList: [{ id: string }] = [{ id: '123' }]
		const isProductOnTheList = userWishList.find( item => item.id === productId )

		if( isProductOnTheList ) {
			return setIsOnWishList( true )
		}

		setIsOnWishList( false )
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
							onClick={ () => console.log('Click corazon') }
						>
							{ isOnWishList
								? <Favorite fontSize='default' color='secondary'/>
								: <FavoriteBorder fontSize='default' color='secondary'/>
							}
						</IconButton>
					</div>
				</div>

				<div className="product-card__header__image">
					<Image 
						src={ defaultProduct.src }
						layout='fill'
					/>
				</div>
			</div>

			<div className="product-card__body">
				<Rating defaultValue={ 4 } max={ 5 } size='small' readOnly />
				<div className="product-card__body__title">
					<Typography variant='h6' >Titulo de Ejemplo </Typography>
					<Typography variant='body2' >
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quisquam... 
					</Typography>
				</div>
			</div>

			<div className="product-card__footer">
				<div className="product-card__footer__prices">
					<span className='main-price' >$55</span>
					<span className='second-price' >$250</span>
				</div>
				
				<CustomButtonLink
					hreflink={`/product/`}
					text='Comprar'
					variant='outlined'
					color='secondary'
					size='small'
				/>
			</div>
		</div>
	)
}

export default ProductCard
