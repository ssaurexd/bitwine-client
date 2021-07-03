import { FC, useState } from 'react'
import {
	Drawer,
	List,
	ListItem,
	Divider
} from '@material-ui/core'


interface Props {
	open: boolean,
	onClose: () => void
}

const NavMobile: FC<Props> = ({ open, onClose }) => {

	return (
		<Drawer
			open={ open }
			anchor='right'
			onClose={ onClose }
		>
			<List>
				<ListItem>Hola jsjdaksjdhaksjhdaksjhdkasjhdkasjhdk</ListItem>
			</List>
			<Divider />
			<List>
				<ListItem>Hola</ListItem>
			</List>
		</Drawer>
	)
}

export default NavMobile
