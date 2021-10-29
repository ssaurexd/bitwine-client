import { FC } from 'react'
import {
	Button,
	ButtonProps,
	CircularProgress
} from '@material-ui/core'

import useStyle from './styles'


interface Props extends ButtonProps {
	isLoading?: boolean,
	title: string
}
const Btn: FC<Props> = ( props ) => {

	/* props */
	const {
		isLoading,
		title,
		disabled,
		...restProps
	} = props

	/* hooks */
	const classes = useStyle()

	return (
		<div className={ classes.btnWrapper }>
			<Button
				{ ...restProps }
				disabled={ isLoading || disabled }
			>
				{ title }
			</Button>
			{ isLoading && <CircularProgress size={ 24 } color='inherit' className={ classes.btnProgress } /> }
		</div>
	)
}

export default Btn