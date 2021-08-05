import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { userAuthRefreshToken, userAuthLogOut } from '../api/userApi'
import { logIn, logOut, Roles } from '../redux/slices/userSlice'
import { getIsLoggedIn, getRememberMe } from '../helpers/auth'


interface Props {
	admitedRoles: Roles[],
	redirectTo: string 
}

const useAuth = ({ admitedRoles, redirectTo }: Props ) => {

	/* hooks */
	const { role, isLoggedIn } = useAppSelector( state => state.user )
	const dispatch = useAppDispatch()
	const location = useRouter()
	const [ globalLoading, setGlobalLoading ] = useState( true )

	/* funtions */
	const fetchUser = async ( ) => {

		const hasSession = getIsLoggedIn()

		if( hasSession) {

			try {
				
				const { user, token } = await userAuthRefreshToken()

				dispatch( logIn({ ...user, isLoggedIn: true }) )

				if( getRememberMe() ) {
					localStorage.setItem( 'token', token )
				}
			} catch ( error ) {

				if( error.response.data.expired ) {
	
					const { ok } = await userAuthLogOut()
		
					if( ok ) dispatch( logOut() )
					return
				}

				location.push( '/' )
				setGlobalLoading( false )
				dispatch( logOut() )
				return
			}
		} else {

			checkUserStatus()
		}
	}
	
	const checkUserStatus = () => {

		const userCanAccess: boolean = admitedRoles.includes( role )

		if( !userCanAccess ) location.push( redirectTo ) 
		setGlobalLoading( false )
	}

	useEffect( () => {

		fetchUser()
	}, [])

	useEffect( () => {

		if( isLoggedIn ) checkUserStatus()
	}, [ isLoggedIn ])
 
	return {
		globalLoading
	}
}

export default useAuth
