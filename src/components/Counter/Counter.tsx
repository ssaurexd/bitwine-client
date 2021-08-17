import { FC, useState } from 'react'
import { 
	IconButton
} from '@material-ui/core'
import {	
	Remove,
	Add
} from '@material-ui/icons'

import useStyle from './styles'
import { IProduct } from '../../interfaces/productInterfaces'


interface Props {
	product: IProduct
}

const Counter: FC<Props> = ({ product }) => {

	/* hooks */
	const classes = useStyle()
	const [ counter, setCounter ] = useState<number>( 1 )

	/* funtions */
	const handleAddItem = (  ) => {

		if( product.onStock <= counter ) return
		else {

			setCounter( counter + 1 )
		}
	}

	const handleRemoveItem = (  ) => {
		
		if( counter <= 1 ) return
		else {

			setCounter( counter - 1 )
		}
	}

	return (
		<div className={ classes.root } >
			<IconButton
				size='small'
				color='secondary'
				onClick={ handleRemoveItem }
			>
				<Remove />
			</IconButton>
			<span>{ counter }</span>
			<IconButton
				size='small'
				color='secondary'
				onClick={ handleAddItem }
			>
				<Add />
			</IconButton>
		</div>
	)
}

export default Counter
