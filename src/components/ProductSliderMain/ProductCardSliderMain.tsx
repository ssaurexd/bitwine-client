import { FC } from 'react'
import { Button, Typography } from '@material-ui/core'
import Image from 'next/image'

import defaultProduct from '../../../public/assets/images/products/default.png'


const ProductCardSliderMain: FC = () => {
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
					src={ defaultProduct.src } 
					alt='Default' 
					width={ 310 } 
					height={ 100 } 
					layout='intrinsic' 
				/>
			</div>
		</div>
	)
}

export default ProductCardSliderMain
