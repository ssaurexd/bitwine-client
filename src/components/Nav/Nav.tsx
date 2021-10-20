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
import clsx from 'clsx'

import { useAppSelector } from '../../hooks/reduxHooks'
import useStyle from './styles'
import useNav from '../../hooks/useNav'

import NavMobile from './NavMobile'
import CustomButtonLink from '../CustomButtonLink'
import Logo from './Logo'
import CustomSearch from '../CustomSearch/CustomSearch'
import Profile from './Profile'
import ShopCart from '../ShopCart'


interface Props {
	haveHeader: boolean
}

const Nav: FC<Props> = ({ haveHeader }) => {

	/* hooks */
	const location = useRouter()
	const user = useAppSelector( state => state.user )
	const { isScrolling } = useNav()
	const [ openDrawer, setOpenDrawer ] = useState<boolean>( false )
	const classes = useStyle({ isScrolling: isScrolling && haveHeader ? true : false })
	const pathName = location.pathname

	return (
		<>
			<AppBar 
				position='fixed'
				color={ isScrolling && haveHeader ? 'transparent' : 'default' } 
				elevation={ isScrolling ? 0 : 3 }
				className={ classes.appBar }
				component='nav'
				id='nav-main'
			>
				<Toolbar className={ classes.toolBar } >
					<Container >
						<Grid container alignItems='center' justifyContent='space-between' wrap='nowrap' >
							{/* logo */}
							<Grid item xs={ 2 } lg={ 2 } >
								<Logo isScrolling={ isScrolling && haveHeader ? true : false } />
							</Grid>
							
							{/* nav options */}
							<Grid container item justifyContent='flex-end' component='ul' direction='row' wrap='nowrap' alignItems='center' xs={ 10 }  >
								{/* search input */}
								<Grid item >
									<CustomSearch />
								</Grid>

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
															<a 
																className={clsx( classes.navMain__link, {
																		[ classes.active2 ]: pathName === '/login'
																	}) 
																}
															>
																Iniciar sesión
															</a>
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
											color='inherit' 
										>
											<MenuIcon />
										</IconButton>
									</Grid>
								</Hidden>
							</Grid>
						</Grid>
					</Container>
				</Toolbar>
			</AppBar>

			<NavMobile open={ openDrawer } onClose={ () => setOpenDrawer( false ) } isScrolling={ isScrolling } />
		</>
	)
}

export default Nav
