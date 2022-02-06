import { FC, ReactElement } from 'react'
import { useRouter } from 'next/router'
import {
	ListItem,
	ListItemIcon,
	ListItemText,
	useMediaQuery,
	useTheme
} from '@material-ui/core'
import clsx from 'clsx'

import useStyle from './styles'


interface Props {
	href: string,
	icon: ReactElement,
	title: string,
	subTitle?: string,
	nested?: boolean,
	onSidebarClose?: () => void
}

const SidebarItem: FC<Props> = ({ href, icon, title, subTitle, nested = false, onSidebarClose }) => {

	/* hooks */
	const theme = useTheme()
	const isSmall = useMediaQuery( theme.breakpoints.down('sm') )
	const location = useRouter()
	const classes = useStyle()
	const isActiveLink: boolean = location.pathname === href

	/* funtions */
	const handleListClick = (  ) => {

		onSidebarClose && isSmall && onSidebarClose()
		location.push( href )
	}

	return (
		<ListItem 
			className={ clsx({
				[classes.listItemActiveLink]: isActiveLink,
				[classes.nested]: nested
			})}
			button 
			onClick={ handleListClick } 
		>
			<ListItemIcon>
				{ icon }
			</ListItemIcon>
			<ListItemText primary={ title } secondary={ subTitle } />
		</ListItem>
	)
}

export default SidebarItem
