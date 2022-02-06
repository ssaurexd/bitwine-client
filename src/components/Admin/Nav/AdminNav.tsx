import { FC, useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import {
	AppBar,
	Toolbar,
	IconButton,
	Grid,
	Badge,
	CircularProgress
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
import { resetStore } from '../../../redux/slices/storeSlice'
import { getPendingSales } from '../../../api/salesApi'
import { ISalesResponse } from '../../../interfaces/salesInterfaces'


interface Props {
	handleSidebarOpen: () => void,
	open: boolean
}

const AdminNav: FC<Props> = ({ handleSidebarOpen, open }) => {

	/* state */
	const [ isLoadingByNotifications, setIsLoadingByNotifications ] = useState( true )
	const [ pendingSales, setPendingSales ] = useState<ISalesResponse[]>( [] )

	/* hooks */
	const classes = useStyle()
	const dispatch = useAppDispatch()
	const location = useRouter()

	/* funtions */
	const handleLogOut = async () => {
		
		const { ok } = await userAuthLogOut()

		if( ok ) {
			
			dispatch( logOut() ) 
			dispatch( resetStore() )
			location.push( '/' )
		} 
	}

	const onGetPendingSales = useCallback( async (  ) => {
		
		const { ok, sales } = await getPendingSales()

		if( ok ) {

			setPendingSales( sales )
		}

		setIsLoadingByNotifications( false )
	}, [])

	/* effects */
	useEffect( () => {

		onGetPendingSales()
	}, [ onGetPendingSales ])

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
								<Badge color='error' 
									badgeContent={ isLoadingByNotifications 
										? <CircularProgress size={ 9 } style={{ color: '#fff', position: 'absolute', top: '30%' }} /> 
										: pendingSales.length
									} 
								>
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
