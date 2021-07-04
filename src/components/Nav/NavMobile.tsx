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

import { useAppSelector } from '../../hooks/reduxHooks'
import useStyle from './styles'

import CustomButtonLink from '../CustomButtonLink'


interface Props {
	open: boolean,
	onClose: () => void
}

const NavMobile: FC<Props> = ({ open, onClose }) => {

	/* hooks */
	const location = useRouter()
	const user = useAppSelector( state => state.user )
	const classes = useStyle( )
	
	/* state */
	const pathName = location.pathname
	const [ openProfileMenu, setOpenProfileMenu ] = useState<boolean>( false )

	/* funtions */

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
							{ user.online && 
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
											<ListItem button >
												<ListItemIcon>
												</ListItemIcon>
												<ListItemText primary="Starred" />
											</ListItem>
										</List>
									</Collapse>
								</>
							}

							<Hidden only={['sm']} >
								<ListItem button >
									<Link href='/documentation' >
										<a className={ pathName === '/documentation' ? classes.active : '' }>Documentación</a>
									</Link>
								</ListItem>
							</Hidden>

							<Divider variant='middle' />

							<Hidden only={['sm']} >
								<ListItem button >
									<Link href='/pricing' >
										<a className={ pathName === '/pricing' ? classes.active : '' }>Precios</a>
									</Link>
								</ListItem>
							</Hidden>

							<Divider variant='middle' />

							<ListItem button >
								<Link href='/about' >
									<a className={ pathName === '/about' ? classes.active : '' }>Acerca de nosotros</a>
								</Link>
							</ListItem>

							<Divider variant='middle' />

							{ !user.online &&
								<>
									<ListItem button >
										<Link href='/login' >
											<a className={ pathName === '/login' ? classes.active : '' }>Iniciar sesión</a>
										</Link>
									</ListItem>

									<Divider variant='middle' />

									<ListItem button >
										<Link href='/signup' >
											<a className={ pathName === '/signup' ? classes.active : '' }>Registrarse</a>
										</Link>
									</ListItem>
								</>
							}

						</List>
					</Grid>

					<Grid container item justify='center' >
						<Container>
							<Grid item >
								<CustomButtonLink 
									variant='contained'
									color='secondary'
									hreflink='/plan'
									text='Get started for FREE'
									fullWidth
								/>
							</Grid>
						</Container>
					</Grid>
				</Grid>
			</Grid>
		</Drawer>
	)
}

export default NavMobile
