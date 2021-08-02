import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
	Container
} from '@material-ui/core'

import { useAppSelector } from '../../hooks/reduxHooks'

import LoginForm from '../LoginForm'


const Login: FC = () => {

	/* hooks */
	const location = useRouter()

	/* redux state */
	const { isLoggedIn } = useAppSelector( state => state.user )

	useEffect( () => {

		if( isLoggedIn ) {
			location.push('/')
		}
	}, [])

	return (
		<LoginForm />
	)
}

export default Login
