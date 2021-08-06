import { FC, useState } from 'react'
import clsx from 'clsx'

import useStyle from './styles'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'

import AdminSidebar from '../Sidebar'
import AdminNav from '../Nav'
import { changeSidebar } from '../../../redux/slices/appSlice'


const AdminLayout: FC = ({ children }) => {

	/* hooks */
	const dispatch = useAppDispatch()
	const { sidebarOpen } = useAppSelector( state => state.app.dashboard )
	const classes = useStyle()

	/* funtions */
	const handleSidebarOpen = () => dispatch( changeSidebar( true ) )
	const handleSidebarClose = () => dispatch( changeSidebar( false ) )
	

  	return (
		<div className={ classes.root }>
			<AdminNav 
				handleSidebarOpen={ handleSidebarOpen }
				open={ sidebarOpen }
			/>
			<AdminSidebar 
				handleSidebarClose={ handleSidebarClose } 
				open={ sidebarOpen }
			/>
			
			{/* content */}
			<main
				className={ 
					clsx( classes.content, {
						[classes.contentShift]: sidebarOpen,
					})
				}
			>
				<div className={ classes.drawerHeader } />
				{ children }
			</main>
		</div>
 	)
}

export default AdminLayout
