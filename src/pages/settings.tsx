import { FC } from 'react'
import FooterMain from '../components/FooterMain'

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
			<Layout>
				<MySettings />
				<FooterMain />
			</Layout>
		</Auth>
	)
}

export default profile