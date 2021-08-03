import { FC } from 'react'

import {
	CardMembership,
	LocalShipping,
	Security,
	TimeToLeave
} from '@material-ui/icons'
import useStyle from './styles'
import { Typography } from '@material-ui/core'


type IconType = 'CardMembership' | 'LocalShipping' | 'Security' | 'TimeToLeave'
interface Props {
	icon: IconType,
	desc: string,
	title: string
}

const WhyChooseUsCard: FC<Props> = ({ icon, desc, title }) => {

	return (
		<div className='why-choose-us-main__cards-container__card' >
			<div className='card-icon' >
				{ RenderIcon( icon ) }
			</div>

			<Typography variant='h5' align='center'  >{ title }</Typography>
			<Typography variant='body2' align='center' >{ desc }</Typography>
		</div>
	)
}

const RenderIcon = ( icon: IconType ) => {

	/* hooks */
	const classes = useStyle()

	switch ( icon ) {
		case 'CardMembership':
			return <CardMembership className={ classes.icon } />

		case 'LocalShipping':
			return <LocalShipping className={ classes.icon } />

		case 'Security':
			return <Security  className={ classes.icon } />

		case 'TimeToLeave': 
			return <TimeToLeave className={ classes.icon } />
	}
}


export default WhyChooseUsCard
