import { FC, ReactElement } from 'react'
import useAuth from '../../hooks/useAuth'

import GlobalLoading from '../GlobalLoading'


interface Props {
	children: ReactElement,
	admitedRoles: Array<string>,
	needToRedirect: boolean,
	redirectTo: string 
}

const Auth: FC<Props> = ({ admitedRoles, children, needToRedirect, redirectTo }) => {

	/* hooks */
	const { globalLoading } = useAuth({ admitedRoles, needToRedirect, redirectTo })

	if( globalLoading ) return <GlobalLoading show={ globalLoading } />

	return  children 
}

export default Auth
