import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { useAppSelector } from '../../hooks/reduxHooks'


interface Props {
	children: JSX.Element,
	admitedRoles: Array<string>,
	needToRedirect: boolean,
	redirectTo: string 
}

const Auth = ( props: Props ) => {

	/* props */
	const {
		children,
		admitedRoles,
		redirectTo,
		needToRedirect
	} = props
	/* redux state */
	const { role, online } = useAppSelector( state => state.user )
	/* state */
	const location = useRouter()

	/* funtions */
	const checkUserStatus = (  ) => {

		const userCanAccess: boolean = online && admitedRoles.includes( role )

		if( !userCanAccess && needToRedirect ) {
			location.push( redirectTo )
		}
	}

	useEffect( () => {
		
		checkUserStatus()
	}, [ online ])

	return children 
}

export default Auth
