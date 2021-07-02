import { FC } from 'react'
import Image from 'next/image'
import { Typography } from '@material-ui/core'


const HeaderMain: FC = () => {

	return (
		<header className='header-main'>
			<div className="header-main__banner">
				<Image 
					src='https://www.mockplus.com/images/blog-banner.png'
					alt='Banner'
					layout='fill'
					objectFit='cover'
				/>
			</div>
			
			<div className="header-main__container">
				<Typography 
					variant='h1'
					className='title'
				>
					BitBlog - Best API for getting a blog
				</Typography>

				<Typography 
					variant='h5'
					className='title'
				>
					Make an API faster
				</Typography>
			</div>
		</header>
	)
}

export default HeaderMain
