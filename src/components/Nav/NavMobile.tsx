import { FC, useState } from 'react'
import { useRouter } from 'next/router'
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
} from '@material-ui/core'
import { 
	MenuOpen,
	ExpandLess,
	ExpandMore,
	Image as ImageIcon,
	ExitToApp,
	Settings,
	Favorite,
	Tune
} from '@material-ui/icons'

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import useStyle from './styles'
import { userAuthLogOut } from '../../api/userApi'
import { logOut } from '../../redux/slices/userSlice'

import CustomButtonLink from '../CustomButtonLink'


interface Props {
	open: boolean,
	onClose: () => void,
	isScrolling: boolean
}

const NavMobile: FC<Props> = ({ open, onClose, isScrolling }) => {

	/* hooks */
	const location = useRouter()
	const user = useAppSelector( state => state.user )
	const dispatch = useAppDispatch()
	const classes = useStyle({ isScrolling })
	
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

		if( ok ) {

			dispatch( logOut() ) 
			location.push( '/' )
		} 
	}

	return (
		<Drawer
			open={ open }
			anchor='left'
			onClose={ onClose }
			className='nav-mobile-main'
			classes={{
				paper: classes.drawerPaper
			}}
		>
			<Grid container justifyContent='space-between' alignItems='center' direction='column' >
				<Grid container item justifyContent='flex-end' direction='row' >
					<Grid item  >
						<IconButton onClick={ onClose }>
							<MenuOpen />
						</IconButton>
					</Grid>
				</Grid>

				<Grid container item direction='column' justifyContent='space-between' >
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

										<ListItemText primary={`${ user.name } ${ user.lastName }`} secondary={ user.email } />
										{ openProfileMenu ? <ExpandLess /> : <ExpandMore /> }
									</ListItem>

									<Divider variant='middle' />

									<Collapse in={ openProfileMenu } >
										<List component="div" disablePadding>
											{ /^(admin)/.test( user.role ) &&
												<ListItem button onClick={ () => handleOnGoTo('/admin') } >
													<ListItemIcon>
														<Tune />
													</ListItemIcon>
													<ListItemText primary="Panel de administración" />
												</ListItem>
											}
											<ListItem button onClick={ () => handleOnGoTo('/wish-list') }>
												<ListItemIcon>
													<Favorite />
												</ListItemIcon>
												<ListItemText primary="Lista de deseos" />
											</ListItem>
											<ListItem button onClick={ () => handleOnGoTo('/settings') }>
												<ListItemIcon>
													<Settings />
												</ListItemIcon>
												<ListItemText primary="Configuracion" />
											</ListItem>
											<ListItem button onClick={ handleLogOut } >
												<ListItemIcon>
													<ExitToApp />
												</ListItemIcon>
												<ListItemText primary="Cerrar Sesión" />
											</ListItem>
										</List>
									</Collapse>
								</>
							}

							<Divider variant='middle' />

							{ !user.isLoggedIn &&
								<>
									<ListItem button onClick={ () =>  handleOnGoTo( '/login' ) } >
										<ListItemText primary='Iniciar sesión' className={ pathName === '/login' ? classes.active : '' } />
									</ListItem>

									<Divider variant='middle' />

									<ListItem>
										<CustomButtonLink 
											variant='contained'
											color='primary'
											hreflink='/signup'
											text='Crear cuenta'
											fullWidth
											disableElevation
											size='small'
										/>
									</ListItem>
								</>
							}

						</List>
					</Grid>
				</Grid>
			</Grid>
		</Drawer>
	)
}

export default NavMobile
