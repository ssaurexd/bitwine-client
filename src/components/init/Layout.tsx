import { FC, ReactNode, useRef } from 'react'
import { CssBaseline } from '@material-ui/core'

import Nav from '../Nav'


interface Props {
	children: JSX.Element
}

const Layout: FC<Props> = ( { children } ) => {

	const navElement = useRef<ReactNode>( null )

	return (
		<>
			<CssBaseline />
			<Nav />
			{ children }
		</>
	)
}

export default Layout
