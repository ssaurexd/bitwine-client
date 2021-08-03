import { FC } from 'react'
import { Button, Typography } from '@material-ui/core'
import Image from 'next/image'

import defaultProduct from '../../../public/assets/images/products/default.png'
import { IBannerProduct } from '../../interfaces/product'


interface Props {
	product: IBannerProduct
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
					src={ product.image } 
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
