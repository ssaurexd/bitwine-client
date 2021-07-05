import { FC } from 'react'
import Image from 'next/image'
import { Typography } from '@material-ui/core'

import CustomButtonLink from '../CustomButtonLink'


interface Props {
	title: string,
	subTitle?: string,
	showBtn?: boolean,
	bannerImage?: string 
}

const HeaderMain: FC<Props> = ({ title, subTitle, bannerImage, showBtn = false }) => {

	/* state */
	const deafultImage = 'http://www.fisheroffshore.com/files/3715/0220/0754/Global-locations-banner-1920-x-400.jpg'

	return (
		<header className='header-main'>
			<div className="header-main__banner">
				<Image 
					src={ bannerImage ? bannerImage : deafultImage }
					alt='Banner'
					layout='fill'
					objectFit='cover'
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

					<p>{ subTitle }</p>
				</div>

				{ showBtn &&
					<CustomButtonLink 
						variant='outlined'
						color='secondary'
						size='large'
						hreflink='/pricing'
						text='Get started for FREE'
					/>
				}
			</div>
		</header>
	)
}

export default HeaderMain
