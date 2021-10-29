import { FC } from 'react'
import { Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'

import useStyle from './styles'
import { IProduct } from '../../interfaces/productInterfaces'


interface Props {
	product: IProduct
}

const ProductOnePageContent: FC<Props> = ({ product }) => {

	/* state */
	const hasDiscount = product.discount > 0 ? true : false 

	/* hooks */
	const classes = useStyle()

	/* funtions */
	const getCategories = () => {
		
		const categoriesToReturn = product.categories.filter( category => category.value !== 'flash-sales' ) 

		return categoriesToReturn.map( catgory => catgory.name )
	}

	return (
		<section className={ classes.content } >
			<Typography variant='h1' color='textPrimary' >{ product.name }</Typography>
			<div className={ classes.contentContainer } >
				<Typography variant='subtitle1' >Calificación: </Typography>
				<Rating defaultValue={ 4 } max={ 5 } size='small' readOnly />
				<Typography variant='subtitle2' >({ product.rate.length })</Typography>
			</div>
			<div className={ classes.contentContainer } >
				<Typography variant='subtitle1' >Categorias: </Typography> <Typography variant='subtitle2' >{ getCategories().join( ' / ' ) }</Typography>
			</div>
			{ hasDiscount && <Typography className={ classes.price } variant='h5' color='textSecondary' >${ product.price }</Typography>}
			<Typography variant='h2' color='primary' >${ product.priceWithDiscount }</Typography>
			<div className={ classes.contentContainer } >
				<Typography variant='subtitle1' >Disponible: { product.onStock }</Typography> 
			</div>
		</section>
	)
}

export default ProductOnePageContent
