import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
	AppBar,
	Toolbar,
	IconButton,
	Container,
	Typography,
	Hidden,
	Grid
} from '@material-ui/core'
import { Menu } from '@material-ui/icons'

import { useAppSelector } from '../../hooks/reduxHooks'
import useStyle from './styles'
import logoImage from '../../../public/assets/images/logo-sm.webp'

import NavMobile from './NavMobile'


interface Props {
}

const Nav: FC<Props> = ( props ) => {

	/* hooks */
	const classes = useStyle()
	const user = useAppSelector( state => state.user )
	
	/* state */
	const [ transparent, setTransparent ] = useState<boolean>( true )
	const [ openDrawer, setOpenDrawer ] = useState<boolean>( false )
	
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
				className={ classes.appBar }
			>
				<Toolbar className={classes.toolBar } >
					<Container >
						<Grid container alignItems='center' justify='space-between' wrap='nowrap' >
							<Grid item>
								<Link href='/' >
									<a className={`${ classes.logo } ${ transparent && classes.colorWhite }`} >
										<Grid container alignItems='center' wrap='nowrap' >
											<Grid item >
												<Image 
													src={ logoImage }
													width={ 40 }
													height={ 40 }
												/> 
											</Grid>
											<Grid item >
												<Typography variant='h2'>BitBlog</Typography>		
											</Grid>
										</Grid>
									</a>
								</Link>
							</Grid>
							<Hidden only={['lg', 'xl', 'md']} >
								<Grid item >
									<IconButton 
										onClick={ () => setOpenDrawer( true ) }
									>
										<Menu className={`${ classes.menu } ${ transparent && classes.colorWhite }`} />
									</IconButton>
								</Grid>
							</Hidden>
						</Grid>
					</Container>
				</Toolbar>
			</AppBar>

			<NavMobile open={ openDrawer } onClose={ () => setOpenDrawer( false ) } />
		</nav>
	)
}

export default Nav
