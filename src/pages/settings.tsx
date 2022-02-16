import { FC } from 'react'

import headerImg from '../../public/assets/images/defaultHeaderBG2.png'

import FooterMain from '../components/FooterMain'
import HeaderMain from '../components/HeaderMain'
import Auth from '../components/init/Auth'
import Layout from '../components/init/Layout'
import MySettings from '../components/MySettings'


interface Props {
	
}
const profile: FC<Props> = () => {

	return (
		<Auth
			admitedRoles={['admin', 'user']}
		>
			<Layout haveHeader >
				<HeaderMain 
					title='Mi'
					subTitle='Configuración'
					bannerImage={ headerImg.src }
				/>
				<MySettings />
				<FooterMain />
			</Layout>
		</Auth>
	)
}

export default profile