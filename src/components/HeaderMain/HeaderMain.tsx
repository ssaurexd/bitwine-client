import { FC } from 'react'
import Image from 'next/image'
import { Divider, Typography } from '@material-ui/core'

import CustomButtonLink from '../CustomButtonLink'
import defaultBanner from '../../../public/assets/images/defaultHeaderBG.jpg'


interface Props {
	title: string,
	subTitle?: string,
	showBtn?: boolean,
	bannerImage?: string,
	bottomShadow?: boolean
}

const HeaderMain: FC<Props> = ({ title, subTitle, bannerImage, showBtn = false, bottomShadow = false }) => {

	return (
		<header className={`header-main ${ bottomShadow && 'shadow' }`}> 
			<div className="header-main__banner">
				<Image 
					src={ bannerImage ? bannerImage : defaultBanner.src }
					alt='Banner'
					layout='fill'
					objectFit='cover'
				/>
			</div>
			
			<div className="header-main__container">
				<div className="title-container">
					<Typography 
						variant='h2'
						className='title-container__h1'
					>
						{ title }
					</Typography>

					{ subTitle && 
						<>
							<Divider className='header-main__divider' variant='middle' />
							<p className='title-container__subTitle' >{ subTitle }
							</p> 
						</>
					}
				</div>

				{ showBtn &&
					<CustomButtonLink 
						variant='contained'
						color='primary'
						size='large'
						hreflink='/market'
						text='Empezar a comprar'
						disableElevation
					/>
				}
			</div>
		</header>
	)
}

export default HeaderMain
