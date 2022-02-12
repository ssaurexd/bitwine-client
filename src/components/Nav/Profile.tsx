import { FC, useState, MouseEvent } from 'react'
import Link from 'next/link'
import {
	Settings,
	Favorite,
	ExitToApp,
	Tune
} from '@material-ui/icons'
import {
	Avatar,
	MenuList,
	Popover,
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
import { resetStore } from '../../redux/slices/storeSlice'
import { getLinkImage } from '../../helpers/helpers'


interface Props {
	isScrolling: boolean
}
const Profile: FC<Props> = ({ isScrolling }) => {

	/* hooks */
	const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>( null )
	const user = useAppSelector( state => state.user )
	const dispatch = useAppDispatch()
	const location = useRouter()
	const classes = useStyle({ isScrolling })
	const open = Boolean( anchorEl )

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
			dispatch( resetStore() )
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
					<Avatar className={ classes.avatar } src={ user.avatar && getLinkImage( user.avatar ) } >
						{ user.name.charAt(0) }{ user.lastName.charAt(0) }
					</Avatar>
				</IconButton>
				<Popover
					open={ open }
					onClose={ handleClose }
					id='profile-menu'
					anchorEl={ anchorEl }
					anchorOrigin={{
						vertical: 'bottom',
    					horizontal: 'center',
					}}
					transformOrigin={{
						vertical: 'top',
    					horizontal: 'center',
					}}
					classes={{
						paper: classes.popoverMenu
					}}
				>
					<MenuList>
						{ /^(admin)/.test( user.role ) &&
							<MenuItem>
								<ListItemIcon>
									<Tune />
								</ListItemIcon>
								<Link href='/admin' >
									<a>Panel de administración</a>	
								</Link>
							</MenuItem>
						}
						<MenuItem>
							<ListItemIcon>
								<Favorite />
							</ListItemIcon>
							<Link href='/wish-list' >
								<a>Lista de deseos</a>	
							</Link>
						</MenuItem>
						<MenuItem>
							<ListItemIcon>
								<Settings />
							</ListItemIcon>
							<Link href='/settings' >
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
				</Popover>
			</Grid>
		</Hidden>
	)
}

export default Profile
