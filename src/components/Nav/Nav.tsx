import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { 
	AppBar,
	Toolbar,
	IconButton,
	Container,
	Hidden,
	Grid,
	List,
	ListItem,
	Badge
} from '@material-ui/core'
import { 
	Menu,
	ShoppingCart
} from '@material-ui/icons'

import { useAppSelector } from '../../hooks/reduxHooks'
import useStyle from './styles'

import NavMobile from './NavMobile'
import CustomButtonLink from '../CustomButtonLink'
import Logo from './Logo'
import CustomSearch from './CustomSearch'


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
				elevation={ transparent ? 0 : 3 }
				className={ classes.appBar }
			>
				<Toolbar className={classes.toolBar } >
					<Container >
						<Grid container alignItems='center' justify='space-between' wrap='nowrap' >
							{/* logo */}
							<Grid item xs={ 8 } md={ 2 } >
								<Logo transparent={ transparent } />
							</Grid>

							{/* search input */}
							<Grid item md={ 2 }  >
								<Hidden only={['xs']} >
									<CustomSearch />
								</Hidden>
							</Grid>

							{/* nav options */}
							<Grid container item xs={ 4 } md={ 10 } justify='flex-end' >
								<List className={ `${ transparent && classes.colorWhite }` } >
									<Grid 
										container 
										item 
										direction='row' 
										wrap='nowrap' 
										alignItems='center' 
									>
										<Grid item >
											<ListItem>
												<IconButton
													color='inherit'
												>
													<Badge badgeContent={ 3 } color='primary' >
														<ShoppingCart />
													</Badge>
												</IconButton>
											</ListItem>
										</Grid>

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
																color='primary'
																hreflink='/signup'
																text='Crear cuenta'
																disableElevation
															/>
														</Hidden>
													</Grid>
												</>
											)
										}
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
