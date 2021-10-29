import React, { FC } from 'react'
import { Typography } from '@material-ui/core'
import CustomButtonLink from '../components/CustomButtonLink'
import Layout from '../components/init/Layout'
import FooterMain from '../components/FooterMain'
import Auth from '../components/init/Auth'


const Custom404: FC = () => {
	return (
		<Auth
			admitedRoles={['admin', 'guest', 'user']}
		>
			<Layout haveHeader >
				<main className='no-found-main' >
					<div className="container">
						<div>
							<Typography variant='h1' align='center' color='inherit' >
								404
							</Typography>
							<Typography variant='subtitle1' align='center' color='inherit' >
								Page Not Found
							</Typography>
							<Typography variant='subtitle2' align='center' color='inherit' >
								Oops! Parece que te perdiste.
							</Typography>
						</div>
						<div>
							<CustomButtonLink 
								hreflink='/'
								text='Volvamos a casa'
								variant='contained'
								color='primary'
								disableElevation
								fullWidth
							/>
						</div>
					</div>
				</main>

				<FooterMain />
			</Layout>
		</Auth>
	)
}

export default Custom404
