import { FC, useState } from 'react'
import Image from 'next/image'
import { 
	Button, 
	Container, 
	Divider, 
	Typography,
	IconButton, 
	Grid
} from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import { Add, AddShoppingCart, Favorite, Remove } from '@material-ui/icons'


import { IProduct } from '../../interfaces/productInterfaces'
import useStyle from './styles'
import OurProductCard from '../OurProducts/OurProductCard'
import SliderOneProduct from './SliderOneProduct'
import ProductOnePageContent from './ProductOnePageContent'
import ProductOnePageButtons from './ProductOnePageButtons'


interface Props {
	product: IProduct,
	related: IProduct[]
}

const ProductOnePage: FC<Props> = ({ product, related }) => {

	/* hooks */
	const classes = useStyle()
	
	return (
		<main className={ classes.root } >
			<Container className={ classes.container } >
				<Grid container justifyContent='center' spacing={ 3 } >
					<Grid item xs={ 12 } md={ 8 } >
						<SliderOneProduct product={ product } />
					</Grid>
					<Grid item container xs={ 12 } md={ 4 } direction='column' >
						<Grid item container xs alignItems='flex-start' >
							<Grid item xs >
								<ProductOnePageContent product={ product } />
							</Grid>
						</Grid>
						<Grid item container xs alignItems='flex-end' >
							<Grid item xs={ 12 } >
								<ProductOnePageButtons product={ product } />
							</Grid>
						</Grid>
					</Grid>
					<Grid item container xs direction='column' >
						<Grid item xs >
							<section>
								<Typography variant='h3' >Descripción</Typography>
								<Typography className={ classes.description } component='div' dangerouslySetInnerHTML={{ __html: product.description }} />
							</section>
						</Grid>
						<Divider className={ classes.divider } />
						<Grid item xs >
							<section >
								<Typography variant='h3' >Productos relacionados</Typography>
								<section className={ classes.gridContainer } >
									{ related.map( product => (
										<OurProductCard key={ product._id } product={ product } />
									))}
								</section>
							</section>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</main>
	)
}

export default ProductOnePage
