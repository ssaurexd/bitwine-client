import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
	Drawer,
	List,
	ListItem,
	Divider,
	Grid,
	IconButton,
	Collapse,
	ListItemIcon,
	ListItemAvatar,
	ListItemText,
	Avatar,
	Hidden,
	Container
} from '@material-ui/core'
import { 
	MenuOpen,
	ExpandLess,
	ExpandMore,
	Image as ImageIcon 
} from '@material-ui/icons'

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import useStyle from './styles'
import { userAuthLogOut } from '../../helpers/userApi'
import { logOut } from '../../redux/slices/userSlice'

import CustomButtonLink from '../CustomButtonLink'


interface Props {
	open: boolean,
	onClose: () => void
}

const NavMobile: FC<Props> = ({ open, onClose }) => {

	/* hooks */
	const location = useRouter()
	const user = useAppSelector( state => state.user )
	const dispatch = useAppDispatch()
	const classes = useStyle( )
	
	/* state */
	const pathName = location.pathname
	const [ openProfileMenu, setOpenProfileMenu ] = useState<boolean>( false )

	/* funtions */
	const handleOnGoTo = ( path: string ) => {
		
		onClose()
		location.push( path )
	}
	
	const handleLogOut = async () => {
		
		const { ok } = await userAuthLogOut()

		if( ok ) dispatch( logOut() ) 
	}

	return (
		<Drawer
			open={ open }
			anchor='left'
			onClose={ onClose }
		>
			<Grid container justify='space-between' alignItems='center' direction='column' >
				<Grid container item justify='flex-end' direction='row' >
					<Grid item  >
						<IconButton onClick={ onClose }>
							<MenuOpen />
						</IconButton>
					</Grid>
				</Grid>

				<Grid container item direction='column' justify='space-between' >
					<Grid item >
						<List>
							{ user.isLoggedIn && 
								<>
									<ListItem button onClick={ () => setOpenProfileMenu( !openProfileMenu ) } >
										<ListItemAvatar>
											<Avatar>
												<ImageIcon />
											</Avatar>
										</ListItemAvatar>

										<ListItemText primary="Aure Sand" secondary="ssaurexd@gmail.com" />
										{ openProfileMenu ? <ExpandLess /> : <ExpandMore /> }
									</ListItem>

									<Divider variant='middle' />

									<Collapse in={ openProfileMenu } >
										<List component="div" disablePadding>
											<ListItem button onClick={ handleLogOut } >
												<ListItemIcon>
												</ListItemIcon>
												<ListItemText primary="Cerrar Sesión" />
											</ListItem>
										</List>
									</Collapse>
								</>
							}

							<Hidden only={['sm']} >
								<ListItem button onClick={ () =>  handleOnGoTo( '/documentation' ) } >
									<ListItemText primary='Documentación' className={ pathName === '/documentation' ? classes.active : '' } />
								</ListItem>
							</Hidden>

							<Divider variant='middle' />

							<Hidden only={['sm']} >
								<ListItem button onClick={ () =>  handleOnGoTo( '/pricing' ) } >
									<ListItemText primary='Precios' className={ pathName === '/pricing' ? classes.active : '' } />
								</ListItem>
							</Hidden>

							<Divider variant='middle' />

							<ListItem button onClick={ () =>  handleOnGoTo( '/about' ) } >
								<ListItemText primary='Acerca de nosotros' className={ pathName === '/about' ? classes.active : '' } />
							</ListItem>

							<Divider variant='middle' />

							{ !user.isLoggedIn &&
								<>
									<ListItem button onClick={ () =>  handleOnGoTo( '/login' ) } >
										<ListItemText primary='Iniciar sesión' className={ pathName === '/login' ? classes.active : '' } />
									</ListItem>

									<Divider variant='middle' />
								</>
							}

						</List>
					</Grid>
					
					{ !user.isLoggedIn && 
						<Grid container item justify='center' >
							<Container>
								<Grid item >
									<CustomButtonLink 
										variant='contained'
										color='secondary'
										hreflink='/signup'
										text='Crear cuenta'
										fullWidth
									/>
								</Grid>
							</Container>
						</Grid>
					}
				</Grid>
			</Grid>
		</Drawer>
	)
}

export default NavMobile
