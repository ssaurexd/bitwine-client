import { FC } from 'react'
import {
	Drawer,
	IconButton,
	Divider
} from '@material-ui/core'
import { ChevronLeft } from '@material-ui/icons'

import useStyle from './styles'

import Logo from '../../Nav/Logo'
import AdminSidebarContent from './AdminSidebarContent'


interface Props {
	open: boolean,
	handleSidebarClose: () => void
}

const AdminSidebar:FC<Props> = ({ open, handleSidebarClose }) => {

	/* hooks */
	const classes = useStyle()

	return (
		<Drawer
			className={ classes.drawer }
			variant='persistent'
			anchor='left'
			open={ open }
			classes={{
				paper: classes.drawerPaper,
			}}
		>
			<div className={classes.drawerHeader}>
				<div>
					<Logo transparent={ false } />
				</div>
				<IconButton onClick={ handleSidebarClose }>
					<ChevronLeft />
				</IconButton>
			</div>

			<Divider />

			<AdminSidebarContent />
		</Drawer>
	)
}

export default AdminSidebar
