import { FC } from 'react'

import Nav from '../Nav'


interface Props {
}

const Layout: FC<Props> = ({ children }) => {

	return (
		<>
			<Nav />
			{ children }
		</>
	)
}

export default Layout
