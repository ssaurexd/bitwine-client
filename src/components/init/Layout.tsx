import { FC } from 'react'

import Nav from '../Nav'


interface Props {
	haveHeader?: boolean
}

const Layout: FC<Props> = ({ children, haveHeader = false }) => {

	return (
		<>
			<Nav haveHeader={ haveHeader } />
			{ children }
		</>
	)
}

export default Layout
