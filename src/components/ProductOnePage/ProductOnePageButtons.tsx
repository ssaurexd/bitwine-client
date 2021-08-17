import { FC } from 'react'
import {
	IconButton,
	Button
} from '@material-ui/core'
import {
	Favorite,
	AddShoppingCart
} from '@material-ui/icons'
import Counter from '../Counter/Counter'
import useStyle from './styles'
import { IProduct } from '../../interfaces/productInterfaces'


interface Props {
	product: IProduct
}

const ProductOnePageButtons: FC<Props> = ({ product }) => {

	/* hooks */
	const classes = useStyle()

	return (
		<section>
			<div className={ classes.cartContainer } >
				<Counter product={ product } />
				<div >
					<IconButton>
						<AddShoppingCart />
					</IconButton>
					<IconButton>
						<Favorite />
					</IconButton>
				</div>
			</div>
			<Button
				color='secondary'
				variant='contained'
				fullWidth
			>
				Proceder a pagar
			</Button>
		</section>
	)
}

export default ProductOnePageButtons
