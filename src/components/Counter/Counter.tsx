import { FC, FunctionComponentElement, useState } from 'react'
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
	product: IProduct,
	counter: number,
	onAdd: () => void,
	onRemove: () => void
}	

const Counter: FC<Props> = ({ product, counter, onAdd, onRemove }) => {

	/* hooks */
	const classes = useStyle()

	return (
		<div className={ classes.root } >
			<IconButton
				size='small'
				color='secondary'
				onClick={ onRemove }
			>
				<Remove />
			</IconButton>
			<span>{ counter }</span>
			<IconButton
				size='small'
				color='secondary'
				onClick={ onAdd }
			>
				<Add />
			</IconButton>
		</div>
	)
}

export default Counter
