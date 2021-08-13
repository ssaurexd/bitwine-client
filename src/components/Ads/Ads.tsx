import { FC } from 'react'
import { Container } from '@material-ui/core'

import defaultAdd from '../../../public/assets/images/defaultAdd.jpg'
import useStyle from './styles'


const Ads: FC = () => {

	/* hooks */
	const classes = useStyle({ imgSrc: defaultAdd.src })

	return (
		<Container>
			<div className={ classes.root }></div>
		</Container>
	)
}

export default Ads
