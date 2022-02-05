import { Paper, Typography } from '@material-ui/core'
import { FC } from 'react'
import { IUserAddress } from '../../interfaces/user'
import useStyle from './styles'


interface Props {
	address: IUserAddress,
	onClickCard?: ( item: IUserAddress ) => void
}
const Address: FC<Props> = ({ address, onClickCard }) => {

	/* hooks */
	const classes = useStyle()

	/* funtions */
	const handleClick = () => {
		onClickCard && onClickCard( address )
	}

	return (
		<div
			onClick={ handleClick }
			className={ classes.addressCard }
		>
			<div className={ classes.first } >
				<Typography variant='body2' color='textSecondary'>Nombre: </Typography><span>{ address.name }</span>
				<Typography variant='body2' color='textSecondary'>Email: </Typography><span>{ address.email }</span>
			</div>
			<div >
				<Typography variant='body2' color='textSecondary' >CP: </Typography><span>{ address.zip }</span>
				<Typography variant='body2' color='textSecondary'>Tel: </Typography><span>{ address.phone }</span>
			</div>
		</div>
	)
}

export default Address