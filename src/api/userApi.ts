import axios, { AxiosError } from 'axios'

import { getRememberMe, getToken } from '../helpers/auth'
import { settings } from '../config/settings'
import { 
	IAPILoginTopLevel,
	IAPIRefreshTokenTopLevel,
	IAPILogOutTopLevel
} from '../interfaces/user'


const userApi = axios.create({
	baseURL: `${ settings.BASE_PATH }/api/users`,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Credentials': 'true'
	},
	withCredentials: true,
})

export const userAuthLogin = async ( body: any  ): Promise<IAPILoginTopLevel> => {

	try {
		const resp = await userApi.post<IAPILoginTopLevel>( '/login', JSON.stringify( body ) )
		
		return resp.data
	} catch ( error ) {
		
		const err = error as AxiosError<IAPILoginTopLevel>
		const resp = err.response?.data as IAPILoginTopLevel
        console.log("🚀 ~ file: userApi.ts ~ line 32 ~ userAuthLogin ~ err.response", err.response)

		return resp
	}
}

export const userAuthRefreshToken = async (): Promise<IAPIRefreshTokenTopLevel> => {

	try {
		const token = getToken()
		const resp = await userApi.post<IAPIRefreshTokenTopLevel>( '/refresh-token', { headers: { 'x-token': token } } )
	
		return resp.data
	} catch ( error ) {
		
		const err = error as AxiosError<IAPIRefreshTokenTopLevel>
		const resp = err.response?.data as IAPIRefreshTokenTopLevel

		return resp
	}
}

export const userAuthLogOut = async ( ): Promise<IAPILogOutTopLevel> => {

	try {
		const resp = await userApi.post<IAPILogOutTopLevel>( '/logout' )
	
		return resp.data
	} catch ( error ) {
		
		const err = error as AxiosError<IAPILogOutTopLevel>
		const resp = err.response?.data as IAPILogOutTopLevel

		return resp
	}
}