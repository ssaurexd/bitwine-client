import { FC, ReactElement } from 'react'

import useAuth from '../../hooks/useAuth'
import { Roles } from '../../redux/slices/userSlice'

import GlobalLoading from '../GlobalLoading'


interface Props {
	children: ReactElement,
	admitedRoles: Roles[],
	redirectTo?: string 
}

const Auth: FC<Props> = ({ admitedRoles, children, redirectTo = '/login' }) => {

	/* hooks */
	const { globalLoading } = useAuth({ admitedRoles, redirectTo })

	return ( globalLoading ? <GlobalLoading show={ true } /> : children )
}

export default Auth
