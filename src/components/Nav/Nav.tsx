import { FC, useState } from 'react'
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
	ListItem
} from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'

import { useAppSelector } from '../../hooks/reduxHooks'
import useStyle from './styles'
import useNav from '../../hooks/useNav'

import NavMobile from './NavMobile'
import CustomButtonLink from '../CustomButtonLink'
import Logo from './Logo'
import CustomSearch from './CustomSearch'
import Profile from './Profile'
import ShopCart from '../ShopCart'


interface Props {
	haveHeader: boolean
}

const Nav: FC<Props> = ({ haveHeader }) => {

	/* hooks */
	const classes = useStyle()
	const location = useRouter()
	const user = useAppSelector( state => state.user )
	const [ openDrawer, setOpenDrawer ] = useState<boolean>( false )
	const { isScrolling } = useNav()
	const pathName = location.pathname

	return (
		<nav className='nav-main'>
			<AppBar 
				position='fixed'
				color={ isScrolling && haveHeader ? 'transparent' : 'default' } 
				elevation={ isScrolling ? 0 : 3 }
				className={ classes.appBar }
			>
				<Toolbar className={classes.toolBar } >
					<Container >
						<Grid container alignItems='center' justify='space-between' wrap='nowrap' >
							{/* logo */}
							<Grid item xs={ 2 } lg={ 2 } >
								<Logo transparent={ isScrolling && haveHeader ? true : false } />
							</Grid>
							
							{/* nav options */}
							<Grid container item xs={ 10 } justify='flex-end' >
								<List className={ `${ isScrolling && haveHeader && classes.colorWhite }` } >
									<Grid container item direction='row' wrap='nowrap' alignItems='center' >
										{/* search input */}
										<Hidden only={['xs']} >
											<Grid item >
												<CustomSearch transparent={ isScrolling && haveHeader ? true : false } />
											</Grid>
										</Hidden>

										<Grid item >
											<ListItem>
												<ShopCart />
											</ListItem>
										</Grid>

										{ user.isLoggedIn 
											? <Profile />
											: (
												<>
													<Hidden only={['sm', 'xs']} >
														<Grid item >
															<ListItem autoFocus >
																<Link href='/login' >
																	<a className={`${ classes.navMain__link } ${ pathName === '/login' && classes.active2 }`}>Iniciar sesión</a>
																</Link>
															</ListItem>
														</Grid>
													</Hidden>

													<Hidden only={['sm', 'xs']} >
														<Grid item >
															<CustomButtonLink
																size='small'
																variant='contained'
																color='primary'
																hreflink='/signup'
																text='Crear cuenta'
																disableElevation
															/>
														</Grid>
													</Hidden>
												</>
											)
										}

										<Hidden only={['lg', 'xl', 'md']} >
											<Grid item >
												<IconButton 
													onClick={ () => setOpenDrawer( true ) }
												>
													<MenuIcon className={`${ classes.menu } ${ isScrolling && haveHeader && classes.colorWhite }`} />
												</IconButton>
											</Grid>
										</Hidden>
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
