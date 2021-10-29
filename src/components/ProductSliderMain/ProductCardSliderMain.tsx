import { FC } from 'react'
import Image from 'next/image'
import { Typography } from '@material-ui/core'

import { IBanner } from '../../interfaces/bannerInterfaces'

import CustomButtonLink from '../CustomButtonLink'
import { getLinkImage } from '../../helpers/helpers'


interface Props {
	product: IBanner
}

const ProductCardSliderMain: FC<Props> = ({ product }) => {
	return (
		<div className='card' >
			<div className="card__info">
				<Typography variant='h2' >{ product.title }</Typography>
				<Typography>
					{ product.description }
				</Typography>
				<div className="card-info__btn">
					<CustomButtonLink 
						hreflink={ `/product/${ product.productSlug }` }
						text='Comprar'
						variant='contained'
						color='primary'
					/>
				</div>
			</div>
			<div className="card__image">
				<Image 
					src={ getLinkImage( product.productImg ) } 
					alt={ product.title } 
					width={ 320 } 
					height={ 100 }
					objectFit='contain'
				/>
			</div>
		</div>
	)
}

export default ProductCardSliderMain
