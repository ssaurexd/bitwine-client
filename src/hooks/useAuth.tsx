import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { AxiosError } from 'axios'

import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { userAuthRefreshToken, userAuthLogOut } from '../api/userApi'
import { logIn, logOut, Roles } from '../redux/slices/userSlice'
import { getIsLoggedIn, getRememberMe } from '../helpers/auth'
import { initStore } from '../redux/middlewares/storeMiddlewares'
import { IAPIRefreshTokenTopLevel } from '../interfaces/user'


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

		if( hasSession ) {

			try {
				
				const { user, token } = await userAuthRefreshToken()

				dispatch( logIn({ ...user, isLoggedIn: true }) )
				dispatch( initStore() )

				if( getRememberMe() ) {
					localStorage.setItem( 'token', token )
				}
			} catch ( error ) {

				const err = error as AxiosError<IAPIRefreshTokenTopLevel>
				const resp = err.response?.data as IAPIRefreshTokenTopLevel
				
				if( resp.expired ) {
	
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
