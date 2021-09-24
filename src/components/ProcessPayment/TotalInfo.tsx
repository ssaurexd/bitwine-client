import { FC } from 'react'
import { 
	Divider, 
	Typography 
} from '@material-ui/core'

import { useAppSelector } from '../../hooks/reduxHooks'
import { numberToDecimals } from '../../helpers/helpers'
import { getSubTotalWithoutDiscount, getTotalDiscount } from '../../helpers/storeHelpers'
import useStyle from './styles'


interface Props {
	
}
const TotalInfo: FC<Props> = () => {

	/* hooks */
	const classes = useStyle()
	const { total, items } = useAppSelector( state => state.store.shopCart )

	/* state */
	const tax: number = numberToDecimals( total * 0.16 )
	const subTotal: number = numberToDecimals( getSubTotalWithoutDiscount( items, tax ) )
	const discount: number = numberToDecimals( getTotalDiscount( items ) )

	return (
		<>
			<div className={ classes.totalBox } >
				<Typography variant='subtitle1' >Subtotal:</Typography>
				<Typography variant='subtitle2' >${ subTotal }</Typography>
			</div>
			<div className={ classes.totalBox } >
				<Typography variant='subtitle1' >Costo de envio:</Typography>
				<Typography variant='subtitle2' >${ 0 }</Typography>
			</div>
			<div className={ classes.totalBox } >
				<Typography variant='subtitle1' >Impuestos:</Typography>
				<Typography variant='subtitle2' >${ tax }</Typography>
			</div>
			<div className={ classes.totalBox } >
				<Typography variant='subtitle1' >Descuento:</Typography>
				<Typography variant='subtitle2' >- ${ discount }</Typography>
			</div>

			<Divider />

			<div className={ classes.totalBox } />
			<div>
				<Typography variant='h5' align='right' >${ total }</Typography>
			</div>
		</>
	)
}

export default TotalInfo