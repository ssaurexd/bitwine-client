import { FC } from 'react'
import { CssBaseline } from '@material-ui/core'

import Nav from '../Nav'


interface Props {
	children: JSX.Element
}

const Layout: FC<Props> = ( { children } ) => {

	return (
		<>
			<CssBaseline />
			<Nav />
			{ children }
		</>
	)
}

export default Layout
