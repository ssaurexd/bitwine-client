import { FC, useState } from 'react'
import clsx from 'clsx'
import useStyle from './styles'

import AdminSidebar from '../Sidebar'
import AdminNav from '../Nav'


const AdminLayout: FC = ({ children }) => {

	/* hooks */
	const classes = useStyle()
	const [ open, setOpen ] = useState( true )

	/* funtions */
	const handleSidebarOpen = () => {
		setOpen( true )
	}

	const handleSidebarClose = () => {
		setOpen( false )
	}

  	return (
		<div className={ classes.root }>
			<AdminNav 
				handleSidebarOpen={ handleSidebarOpen }
				open={ open }
			/>
			<AdminSidebar 
				handleSidebarClose={ handleSidebarClose } 
				open={ open }
			/>
			
			{/* content */}
			<main
				className={ 
					clsx( classes.content, {
						[classes.contentShift]: open,
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
