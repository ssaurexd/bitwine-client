import { FC } from 'react'
import { 
	Container, 
	Grid, 
	Typography,
} from '@material-ui/core'

import { useAppSelector } from '../../hooks/reduxHooks'
import useStyle from './styles'

import CustomButtonLink from '../CustomButtonLink'
import OurProductCard from './OurProductCard'


interface Props {
}

const OurProducts: FC = () => {

	/* hooks */
	const { products } = useAppSelector( state => state.app.home.products )
	const classes = useStyle()

	return (
		<Container className={ classes.root } >
			<Typography variant='h4' align='center' >
				Nuestros Productos
			</Typography>
			<section className={ classes.gridContainer } >
				{ products.map( product => (
					<OurProductCard key={ product._id } product={ product } />
				))}
			</section>
			<Grid container justifyContent='center' >
				<Grid item >
					<CustomButtonLink
						text='Ver más'
						hreflink='/market'
						variant='text'
					/>
				</Grid>
			</Grid>
		</Container>
	)
}

export default OurProducts
