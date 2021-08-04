import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { userAuthRefreshToken, userAuthLogOut } from '../helpers/userApi'
import { logIn, logOut, Roles } from '../redux/slices/userSlice'


interface Props {
	admitedRoles: Roles[],
	redirectTo: string 
}
/* rutas en la que no se puede acceder si esta logeado */
const pathsAuth: string[] = ['/login', '/signup']

const useAuth = ( { admitedRoles, redirectTo }: Props ) => {

	const { role, isLoggedIn } = useAppSelector( state => state.user )
	const dispatch = useAppDispatch()
	const location = useRouter()

	/* state */
	const [ globalLoading, setGlobalLoading ] = useState( false )
	const [ needToCheck, setNeedToCheck ] = useState<string | null>( null )
	const [ initialLoad, setInitialLoad ] = useState( true )

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
		
		const userCanAccess: boolean = admitedRoles.includes( role )

		if( isLoggedIn ) {

			if( !userCanAccess ) {
				location.push( redirectTo )
			}
	
			if( pathsAuth.includes( location.pathname ) ) {
				location.push( redirectTo )
			}
		} else {
			if( !userCanAccess ) {
				location.push( redirectTo )
			}
		}
	}

	useEffect( () => {
		
		setNeedToCheck( localStorage.getItem('isLoggedIn') )
		
		if( needToCheck ) fetchUser()
		else setInitialLoad( false )
		
	}, [ needToCheck ])

	useEffect( () => {
		
		if( !initialLoad ) checkUserStatus()
	}, [ isLoggedIn ])

	return {
		globalLoading
	}
}

export default useAuth
