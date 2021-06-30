import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Button } from '@material-ui/core'

import { useAppSelector } from '../../hooks/reduxHooks'

const Login = () => {

	const location = useRouter()
	/* redux state */
	const { online } = useAppSelector( state => state.user )

	useEffect( () => {
		if( online ) {
			location.push('/')
		}
	}, [])

	return (
		<div>
			<Button
				variant='contained'
			>Registrarse
			</Button>
		</div>
	)
}

export default Login
