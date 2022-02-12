import { FC } from 'react'
import { 
	Collapse,
	Divider,
	List, 
	ListItem, 
	ListItemIcon, 
	ListItemText
} from '@material-ui/core'
import Image from 'next/image'
import {
	Storefront,
	ExpandLess,
	ExpandMore,
	Add,
	Face,
	Settings,
	Dashboard,
	List as ListIcon
} from '@material-ui/icons'

import useStyle from './styles'
import defaultAvatar from '../../../../public/assets/images/defaultAvatar.png'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { changeDashboardMenuItem } from '../../../redux/slices/appSlice'
import { getLinkImage } from '../../../helpers/helpers'

import SidebarItem from './SidebarItem'


interface Props {
	onSidebarClose: () => void
}
const AdminSidebarContent: FC<Props> = ({ onSidebarClose }) => {

	/* hooks */
	const { email, name, lastName, avatar } = useAppSelector( state => state.user )
	const { avatarOpen, productOpen } = useAppSelector( state => state.app.dashboard.menu )
	const dispatch = useAppDispatch()
	const classes = useStyle()

	/* funtions */

	return (
		<List>
			<div className={ classes.sidebarProfile }>
				<div className={ classes.sidebarProfileAvatar } >
					<Image className={ classes.sidebarProfileAvatar_img } src={ avatar ? getLinkImage( avatar ) : defaultAvatar.src } alt="Avatar" objectFit='cover' layout='fill' />
				</div>
			</div>

			<ListItem  button onClick={ () => dispatch( changeDashboardMenuItem({ key: 'avatarOpen', value: !avatarOpen }) ) } >
				<ListItemText primary={`${ name } ${ lastName }`} secondary={ email } />
				{ avatarOpen ? <ExpandLess /> : <ExpandMore /> }
			</ListItem>
			<Collapse in={ avatarOpen } >
				<List>
					<SidebarItem
						onSidebarClose={ onSidebarClose }
						href='/admin/profile'
						title='Perfil'
						icon={ <Face /> }
						nested
					/>
					<SidebarItem
						onSidebarClose={ onSidebarClose }
						href='/admin/profile/settings'
						title='Configuración'
						icon={ <Settings /> }
						nested
					/>
				</List>
			</Collapse>

			<Divider />

			{/* analytics */}
			<SidebarItem
				onSidebarClose={ onSidebarClose }
				href='/admin'
				icon={ <Dashboard /> }
				title='Dashboard'
			/>

			{/* products */}
			<ListItem  button onClick={ () => dispatch( changeDashboardMenuItem({ key: 'productOpen', value: !productOpen }) ) } >
				<ListItemIcon>
					<Storefront />
				</ListItemIcon>
				<ListItemText primary='Productos' />
				{ productOpen ? <ExpandLess /> : <ExpandMore /> }
			</ListItem>
			<Collapse in={ productOpen } >
				<List>
					<SidebarItem
						onSidebarClose={ onSidebarClose }
						href='/admin/products/list'
						icon={ <ListIcon /> }
						title='Mis productos'
						nested
					/>
					<SidebarItem
						onSidebarClose={ onSidebarClose }
						href='/admin/products/create'
						icon={ <Add /> }
						title='Agregar producto'
						nested
					/>
				</List>
			</Collapse>
		</List>
	)
}

export default AdminSidebarContent
