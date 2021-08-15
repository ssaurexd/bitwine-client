import { FC } from 'react'
import Image from 'next/image'
import { Button, Typography } from '@material-ui/core'

import { settings } from '../../config/settings'
import { IBanner } from '../../interfaces/bannerInterfaces'
import CustomButtonLink from '../CustomButtonLink'


interface Props {
	product: IBanner
}

const ProductCardSliderMain: FC<Props> = ({ product }) => {
	return (
		<div className='card' >
			<div className="card__info">
				<Typography variant='h2' >{ product.title }</Typography>
				<Typography>
					{/* 150 caracteres maximo */}
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
					src={ `${ settings.BASE_PATH }/${ product.productImg }` } 
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
