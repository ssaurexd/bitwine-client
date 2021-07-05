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
	const { online } = useAppSelector( state => state.user )

	useEffect( () => {

		if( online ) {
			location.push('/')
		}
	}, [])

	return (
		<Container>
			<LoginForm />
		</Container>
	)
}

export default Login
