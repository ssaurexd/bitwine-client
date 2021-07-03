import { FC } from 'react'
import Image from 'next/image'
import { Typography } from '@material-ui/core'

import CustomButtonLink from './CustomButtonLink'


const HeaderMain: FC = () => {

	return (
		<header className='header-main'>
			<div className="header-main__banner">
				<Image 
					src='http://www.fisheroffshore.com/files/3715/0220/0754/Global-locations-banner-1920-x-400.jpg'
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
						BitBlog - Best API for getting a blog
					</Typography>

					<p>Make an API faster</p>
				</div>

				<CustomButtonLink 
					variant='outlined'
					color='secondary'
					size='large'
					hreflink='/login'
					text='Get started for FREE'
				/>
			</div>
		</header>
	)
}

export default HeaderMain
