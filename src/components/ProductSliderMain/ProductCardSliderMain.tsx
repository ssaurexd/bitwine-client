import { FC } from 'react'
import Image from 'next/image'
import { Button, Typography } from '@material-ui/core'

import { IBannerProduct, IProduct } from '../../interfaces/productInterfaces'
import { settings } from '../../config/settings'


interface Props {
	product: IProduct
}

const ProductCardSliderMain: FC<Props> = ({ product }) => {
	return (
		<div className='card' >
			<div className="card__info">
				<Typography variant='h2' >50% Off For Your First Shopping</Typography>
				<Typography>
					{/* 150 caracteres maximo */}
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident voluptatibus ipsa deserunt libero totam, praesentium corrupti adipisci!
				</Typography>
				<div className="card-info__btn">
					<Button
						color='primary'
						variant='contained'
						disableElevation
					>
						Comprar
					</Button>
				</div>
			</div>
			<div className="card__image">
				<Image 
					src={ `${ settings.BASE_PATH }/${ product.image }` } 
					alt='Default' 
					width={ 320 } 
					height={ 100 }
					objectFit='contain'
				/>
			</div>
		</div>
	)
}

export default ProductCardSliderMain
