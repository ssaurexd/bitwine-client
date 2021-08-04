import { FC } from 'react'
import {
	AppBar,
	Toolbar,
	IconButton,
} from '@material-ui/core'
import clsx from 'clsx'
import { Menu } from '@material-ui/icons'
import useStyle from './styles'


interface Props {
	handleSidebarOpen: () => void,
	open: boolean
}

const AdminNav: FC<Props> = ({ handleSidebarOpen, open }) => {

	/* hooks */
	const classes = useStyle()

	return (
		<AppBar
			position="fixed"
			className={
				clsx( classes.appBar, {
					[classes.appBarShift]: open,
				})
			}
			elevation={ 3 }
		>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={ handleSidebarOpen }
					edge="start"
					className={ clsx( classes.menuButton, open && classes.hide ) }
				>
					<Menu />
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}

export default AdminNav
