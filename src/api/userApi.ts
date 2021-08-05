import axios from 'axios'
import { 
	IAPILoginTopLevel,
	IAPIRefreshTokenTopLevel,
	IAPILogOutTopLevel
} from '../interfaces/user'

const userApi = axios.create({
	baseURL: 'http://localhost:3001/api/users',
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Credentials': 'true'
	},
	withCredentials: true
})

export const userAuthLogin = async ( body: any  ): Promise<IAPILoginTopLevel> => {

	const resp = await userApi.post<IAPILoginTopLevel>( '/login', JSON.stringify( body ) )
	
	return resp.data
}

export const userAuthRefreshToken = async ( ): Promise<IAPIRefreshTokenTopLevel> => {

	const rememberMe = localStorage.getItem('rememberMe') || false
	const resp = await userApi.post<IAPIRefreshTokenTopLevel>( '/refresh-token', JSON.stringify({ rememberMe }) )

	return resp.data
}

export const userAuthLogOut = async ( ): Promise<IAPILogOutTopLevel> => {

	const rememberMe = localStorage.getItem('rememberMe') || false
	const resp = await userApi.post<IAPILogOutTopLevel>( '/logout', JSON.stringify({ rememberMe }) )

	return resp.data
}