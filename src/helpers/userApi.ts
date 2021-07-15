import { 
	IAPILoginTopLevel,
	IAPIRefreshTokenTopLevel 
} from '../interfaces/user'


const API_BASE_PATH = 'http://localhost:3001/api/users'

export const userAuthLogin = async ( body: any  ): Promise<IAPILoginTopLevel> => {

	const resp = await fetch( `${ API_BASE_PATH }/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Credentials': 'true'
		},
		credentials: 'include',
		body: JSON.stringify( body )
	})
	const data: IAPILoginTopLevel = await resp.json()

	return data
}

export const userAuthRefreshToken = async ( ): Promise<IAPIRefreshTokenTopLevel> => {

	const rememberMe = localStorage.getItem('rememberMe') || false
	const resp = await fetch( `${ API_BASE_PATH }/refresh-token`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Credentials': 'true'
		},
		credentials: 'include',
		body: JSON.stringify({ rememberMe })
	})
	const data: IAPIRefreshTokenTopLevel = await resp.json()

	return data
}