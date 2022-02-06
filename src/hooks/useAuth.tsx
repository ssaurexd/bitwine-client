import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { userAuthRefreshToken } from '../api/userApi'
import { logIn, logOut, Roles } from '../redux/slices/userSlice'
import { getIsLoggedIn } from '../helpers/auth'
import { initStore } from '../redux/middlewares/storeMiddlewares'


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
				
				const { user, ok } = await userAuthRefreshToken()

				if( ok ) {

					dispatch( logIn({ ...user, isLoggedIn: true }) )
					dispatch( initStore() )
				} else {

					dispatch( logOut() )
					setGlobalLoading( false )
					location.push( '/' )
				}

			} catch ( error ) {

				dispatch( logOut() )
				setGlobalLoading( false )
				location.push( '/' )
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
