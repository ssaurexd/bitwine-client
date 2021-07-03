import { FC, useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { 
	AppBar,
	Toolbar
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { useAppSelector } from '../hooks/reduxHooks'


const useStyle = makeStyles( ( theme ) => ({
	root: {
		flexGrow: 1,
		height: '80px'
	},
	toolBar: {
		alignItems: 'flex-start',
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(2),
		height: '100%'
	},
	title: {
		flexGrow: 1,
		alignSelf: 'flex-end',
	},
}))
interface Props {
}

const Nav: FC<Props> = ( props ) => {

	/* hooks */
	const classes = useStyle()
	const user = useAppSelector( state => state.user )
	
	/* state */
	const [ transparent, setTransparent ] = useState<boolean>( true )
	
	/* funtions */
	const onScroll = () => {
		
		const bodyScrollY = window.scrollY
		const navElement = document.querySelector('.nav-main')
		const navHeight = navElement?.firstElementChild?.clientHeight
		
		if( navHeight && bodyScrollY < navHeight ) setTransparent( true )
		else setTransparent( false )
	}

	useEffect( () => {

		window.addEventListener( 'scroll', onScroll )

		return () => {
			window.removeEventListener( 'scroll', onScroll )
		}
	}, [  ])

	return (
		<nav className='nav-main'>
			<AppBar 
				position='fixed'
				color={ transparent ? 'transparent' : 'default' } 
				elevation={ transparent ? 0 : 2 }
				className={ classes.root }
			>
				<Toolbar className={ classes.toolBar } >
					
				</Toolbar>
			</AppBar>
		</nav>
	)
}

export default Nav
