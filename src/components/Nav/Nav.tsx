import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { 
	AppBar,
	Toolbar,
	IconButton,
	Container,
	Typography,
	Hidden,
	Grid,
	List,
	ListItem,
} from '@material-ui/core'
import { Menu } from '@material-ui/icons'

import { useAppSelector } from '../../hooks/reduxHooks'
import useStyle from './styles'
import logoImage from '../../../public/assets/images/logo-sm.webp'

import NavMobile from './NavMobile'
import CustomButtonLink from '../CustomButtonLink'


interface Props {
}


const Nav: FC<Props> = (  ) => {

	/* hooks */
	const classes = useStyle()
	const location = useRouter()
	const user = useAppSelector( state => state.user )
	
	/* state */
	const pathName = location.pathname
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
							<Grid item xs={ 8 } md={ 2 } >
								<Link href='/' >
									<a className={`${ classes.logo } ${ transparent && classes.colorWhite }`} >
										<Grid container alignItems='center'  wrap='nowrap' >
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

							<Grid container item xs={ 4 } md={ 10 } justify='flex-end' >
								<List className={ `${ transparent && classes.colorWhite }` } >
									<Grid container item direction='row' wrap='nowrap' alignItems='center' >
										<Grid item >
											<Hidden only={['xs',]} >
												<Grid item >
													<ListItem>
														<Link href='/documentation' >
															<a className={`${ classes.navMain__link } ${ pathName === '/documentation' && classes.active2 }`} >Documentación</a>
														</Link>
													</ListItem>
												</Grid>	
											</Hidden>
										</Grid>

										<Grid item >
											<Hidden only={['xs']} >
												<Grid item >
													<ListItem>
														<Link href='/pricing' >
															<a className={`${ classes.navMain__link } ${ pathName === '/pricing' && classes.active2 }`}>Precios</a>
														</Link>
													</ListItem>
												</Grid>	
											</Hidden>
										</Grid>
										<Grid item >
											<Hidden only={['sm', 'xs']} >
												<Grid item >
													<ListItem>
														<Link href='/about' >
															<a className={`${ classes.navMain__link } ${ pathName === '/about' && classes.active2 }`}>Acerca de nosotros</a>
														</Link>
													</ListItem>
												</Grid>	
											</Hidden>
										</Grid>

										{ user.isLoggedIn 
											? (
												<div></div>
											)
											: (
												<>
													<Grid item >
														<Hidden only={['sm', 'xs']} >
															<Grid item >
																<ListItem autoFocus >
																	<Link href='/login' >
																		<a className={`${ classes.navMain__link } ${ pathName === '/login' && classes.active2 }`}>Iniciar sesión</a>
																	</Link>
																</ListItem>
															</Grid>	
														</Hidden>
													</Grid>
													<Grid item >
														<Hidden only={['sm', 'xs']} >
															<CustomButtonLink
																size='small'
																variant='contained'
																color='secondary'
																hreflink='/signup'
																text='Registrarse'
															/>
														</Hidden>
													</Grid>
												</>
											)
										}

										<Grid item >
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
									</Grid>
								</List>
							</Grid>
						</Grid>
					</Container>
				</Toolbar>
			</AppBar>

			<NavMobile open={ openDrawer } onClose={ () => setOpenDrawer( false ) } />
		</nav>
	)
}

export default Nav
