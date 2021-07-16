import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { userAuthRefreshToken, userAuthLogOut } from '../../helpers/userApi'
import { logIn, logOut } from '../../redux/slices/userSlice'

import GlobalLoading from '../GlobalLoading'


interface Props {
	children: JSX.Element,
	admitedRoles: Array<string>,
	needToRedirect: boolean,
	redirectTo: string 
}

/* rutas en la que no se puede acceder si esta logeado */
const pathsAuth: Array<string> = ['/login', '/signup']

const Auth: FC<Props> = ( props ) => {

	/* props */
	const {
		children,
		admitedRoles,
		redirectTo,
		needToRedirect
	} = props

	/* hooks */
	const { role, isLoggedIn } = useAppSelector( state => state.user )
	const dispatch = useAppDispatch()
	const location = useRouter()

	/* state */
	const [ globalLoading, setGlobalLoading ] = useState( false )
	const [ needToCheck, setNeedToCheck ] = useState<string | null>( null )
	

	/* funtions */
	const fetchUser = async ( ) => {
		
		setGlobalLoading( true )

		const { ok, user, expired } = await userAuthRefreshToken()

		if( ok ) {

			dispatch( logIn({ ...user, isLoggedIn: true }) )
		} else if( expired ) {

			const { ok } = await userAuthLogOut()

			if( ok ) dispatch( logOut() )
		}

		setGlobalLoading( false )
	}
	
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
		
		setNeedToCheck( localStorage.getItem('isLoggedIn') )
		if( needToCheck ) fetchUser()
	}, [ needToCheck ])

	useEffect( () => {
		
		checkUserStatus()
	}, [ isLoggedIn ])

	if( globalLoading ) return <GlobalLoading show={ globalLoading } />

	return  children 
}

export default Auth
