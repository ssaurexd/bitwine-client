import { FC, ReactElement } from 'react'
import { useRouter } from 'next/router'
import {
	ListItem,
	ListItemIcon,
	ListItemText
} from '@material-ui/core'
import clsx from 'clsx'

import useStyle from './styles'


interface Props {
	href: string,
	icon: ReactElement,
	title: string,
	subTitle?: string,
	nested?: boolean
}

const SidebarItem: FC<Props> = ({ href, icon, title, subTitle, nested = false }) => {

	const location = useRouter()
	const classes = useStyle()
	const isActiveLink: boolean = location.pathname === href

	return (
		<ListItem 
			className={ clsx({
				[classes.listItemActiveLink]: isActiveLink,
				[classes.nested]: nested
			})}
			button 
			onClick={ () => location.push( href ) } 
		>
			<ListItemIcon>
				{ icon }
			</ListItemIcon>
			<ListItemText primary={ title } secondary={ subTitle } />
		</ListItem>
	)
}

export default SidebarItem
