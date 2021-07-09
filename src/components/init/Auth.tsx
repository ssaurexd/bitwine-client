import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'

import { useAppSelector } from '../../hooks/reduxHooks'


interface Props {
	children: JSX.Element,
	admitedRoles: Array<string>,
	needToRedirect: boolean,
	redirectTo: string 
}

const pathsAuth: Array<string> = ['/login', '/signup']

const Auth: FC<Props> = ( props ) => {

	/* props */
	const {
		children,
		admitedRoles,
		redirectTo,
		needToRedirect
	} = props

	/* redux state */
	const { role, isLoggedIn } = useAppSelector( state => state.user )

	/* state */
	const location = useRouter()

	/* funtions */
	const checkUserStatus = (): void => {

		const userCanAccess: boolean = isLoggedIn && admitedRoles.includes( role )

		if( !userCanAccess && needToRedirect ) {
			location.push( redirectTo )
		}

		if( isLoggedIn && pathsAuth.includes( location.pathname ) ) {
			location.push( redirectTo )
		}
	}

	useEffect( () => {
		
		checkUserStatus()
	}, [ isLoggedIn ])

	return children 
}

export default Auth
