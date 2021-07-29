import { FC } from 'react'
import Image from 'next/image'
import { Typography } from '@material-ui/core'

import CustomButtonLink from '../CustomButtonLink'
import defaultBanner from '../../../public/assets/images/defaultBanner4.jpg'


interface Props {
	title: string,
	subTitle?: string,
	showBtn?: boolean,
	bannerImage?: string
}

const HeaderMain: FC<Props> = ({ title, subTitle, bannerImage, showBtn = false }) => {

	/* state */

	return (
		<header className='header-main'> 
			<div className="header-main__banner">
				<Image 
					src={ bannerImage ? bannerImage : defaultBanner.src }
					alt='Banner'
					layout='fill'
					objectFit='fill'
				/>
			</div>
			
			<div className="header-main__container">
				<div className="title-container">
					<Typography 
						variant='h1'
						className='title-container__h1'
					>
						{ title }
					</Typography>

					{ subTitle && <p className='title-container__subTitle' >{ subTitle }</p> }
				</div>

				{ showBtn &&
					<CustomButtonLink 
						variant='contained'
						color='primary'
						size='large'
						hreflink='/pricing'
						text='Go Shopping'
						disableElevation
					/>
				}
			</div>
		</header>
	)
}

export default HeaderMain
