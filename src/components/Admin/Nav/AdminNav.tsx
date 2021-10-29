import { FC } from 'react'
import { useRouter } from 'next/router'
import {
	AppBar,
	Toolbar,
	IconButton,
	Grid,
	Badge,
} from '@material-ui/core'
import clsx from 'clsx'
import { 
	Menu, 
	Notifications, 
	ExitToApp,
	Home 
} from '@material-ui/icons'

import useStyle from './styles'
import { userAuthLogOut } from '../../../api/userApi'
import { useAppDispatch } from '../../../hooks/reduxHooks'
import { logOut } from '../../../redux/slices/userSlice'


interface Props {
	handleSidebarOpen: () => void,
	open: boolean
}

const AdminNav: FC<Props> = ({ handleSidebarOpen, open }) => {

	/* hooks */
	const classes = useStyle()
	const dispatch = useAppDispatch()
	const location = useRouter()

	/* funtions */
	const handleLogOut = async () => {
		
		const { ok } = await userAuthLogOut()

		if( ok ) {
			
			dispatch( logOut() ) 
			location.push( '/' )
		} 
	}

	return (
		<AppBar
			position="fixed"
			className={
				clsx( classes.appBar, {
					[classes.appBarShift]: open,
				})
			}
			color='secondary'
			elevation={ 3 }
		>
			<Toolbar>
				<Grid container alignItems='center' justifyContent='space-between' >
					<Grid item xs={ 1 } >
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={ handleSidebarOpen }
							edge="start"
							className={ clsx( classes.menuButton, open && classes.hide ) }
						>
							<Menu />
						</IconButton>
					</Grid>

					<Grid container item xs={ 11 } justifyContent='flex-end' >
						<Grid item >
							<IconButton
								color='inherit'
								onClick={ () => location.push( '/' ) }
							>
								<Home />
							</IconButton>
						</Grid>
						<Grid item >
							<IconButton
								color='inherit'
							>
								<Badge color='primary' badgeContent={ 5 } >
									<Notifications />
								</Badge>
							</IconButton>
						</Grid>
						<Grid item >
							<IconButton
								color='inherit'
								onClick={ handleLogOut }
							>	
								<ExitToApp />
							</IconButton>
						</Grid>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	)
}

export default AdminNav
