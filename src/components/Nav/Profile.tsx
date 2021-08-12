import { FC, useState, MouseEvent } from 'react'
import Link from 'next/link'
import {
	Settings,
	Person,
	Favorite,
	ExitToApp
} from '@material-ui/icons'
import {
	Avatar,
	MenuList,
	Menu,
	MenuItem,
	ListItemIcon,
	Grid,
	IconButton,
	Hidden
} from '@material-ui/core'

import useStyle from './styles'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { userAuthLogOut } from '../../api/userApi'
import { logOut } from '../../redux/slices/userSlice'
import { useRouter } from 'next/router'


const Profile: FC = () => {

	/* hooks */
	const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>( null )
	const user = useAppSelector( state => state.user )
	const dispatch = useAppDispatch()
	const location = useRouter()
	const classes = useStyle()

	const open = Boolean(anchorEl);

	/* funtions */
	const handleClick = ( event: MouseEvent<HTMLElement> ) => {
		setAnchorEl( event.currentTarget )
	}

	const handleClose = () => {
		setAnchorEl( null )
	}
	const handleLogOut = async () => {
		
		const { ok } = await userAuthLogOut()

		if( ok ) {

			dispatch( logOut() ) 
			location.push( '/' )
		} 
	}

	return (
		<Hidden only={['sm', 'xs']} >
			<Grid item >
				<IconButton
					size='small'
					onClick={ handleClick }
					aria-controls='profile-menu'
					aria-haspopup='true'
				>
					<Avatar className={ classes.avatar } src={ user.avatar } >
						{ user.name.charAt(0) }{ user.lastName.charAt(0) }
					</Avatar>
				</IconButton>
				<Menu
					open={ open }
					onClose={ handleClose }
					id='profile-menu'
					anchorEl={ anchorEl }
				>
					<MenuList>
						<MenuItem>
							<ListItemIcon>
								<Person />
							</ListItemIcon>
							<Link href='/profile' >
								<a>Perfil</a>	
							</Link>
						</MenuItem>
						<MenuItem>
							<ListItemIcon>
								<Favorite />
							</ListItemIcon>
							<Link href='/profile' >
								<a>Lista de deseos</a>	
							</Link>
						</MenuItem>
						<MenuItem>
							<ListItemIcon>
								<Settings />
							</ListItemIcon>
							<Link href='/profile' >
								<a>Configuracion</a>	
							</Link>n
						</MenuItem>
						<MenuItem button onClick={ handleLogOut } >
							<ListItemIcon>
								<ExitToApp />
							</ListItemIcon>
							Cerrar sesión
						</MenuItem>
					</MenuList>
				</Menu>
			</Grid>
		</Hidden>
	)
}

export default Profile
