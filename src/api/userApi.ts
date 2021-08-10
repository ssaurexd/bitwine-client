import axios from 'axios'

import { getRememberMe, getToken } from '../helpers/auth'
import apiConfig from './'
import { 
	IAPILoginTopLevel,
	IAPIRefreshTokenTopLevel,
	IAPILogOutTopLevel
} from '../interfaces/user'


const userApi = axios.create({
	baseURL: `${ apiConfig.BASE_PATH }/api/users`,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Credentials': 'true'
	},
	withCredentials: true,
})

export const userAuthLogin = async ( body: any  ): Promise<IAPILoginTopLevel> => {

	const resp = await userApi.post<IAPILoginTopLevel>( '/login', JSON.stringify( body ) )
	
	return resp.data
}

export const userAuthRefreshToken = async (): Promise<IAPIRefreshTokenTopLevel> => {

	const rememberMe = getRememberMe()
	const token = getToken()
	const resp = await userApi.post<IAPIRefreshTokenTopLevel>( '/refresh-token', { rememberMe }, { headers: { 'x-token': rememberMe ? token: '' } } )

	return resp.data
}

export const userAuthLogOut = async ( ): Promise<IAPILogOutTopLevel> => {

	const resp = await userApi.post<IAPILogOutTopLevel>( '/logout' )

	return resp.data
}