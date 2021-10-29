import { FC } from 'react'
import Image from 'next/image'
import { Container } from '@material-ui/core'

import defaultAds1 from '../../../public/assets/images/defaultAds1.jpg'
import defaultAds2 from '../../../public/assets/images/defaultAds2.png'
import useStyle from './styles'


const Ads: FC = () => {

	/* hooks */
	const classes = useStyle()

	return (
		<Container>
			<div className={ classes.root }>
				<div className={ classes.imgContainer } >
					<Image 
						layout='fill'
						src={ defaultAds1.src }
						/* width={ defaultAds1.width }
						height={ defaultAds1.height } */
						alt='Ad1'
						objectFit='contain'
					/>
				</div>
				<div className={ classes.imgContainer } >
					<Image 
						layout='fill'
						src={ defaultAds2.src }
						/* width={ defaultAds2.width }
						height={ defaultAds2.height } */
						alt='Ad2'
						objectFit='contain'
					/>
				</div>
			</div>
		</Container>
	)
}

export default Ads
