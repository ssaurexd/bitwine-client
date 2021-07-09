import { TopLevel } from '../interfaces/user'


const API_BASE_PATH = 'http://localhost:3001/api/users'

export const userAuthLogin = async ( body: any  ): Promise<TopLevel> => {

	const resp = await fetch( `${ API_BASE_PATH }/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Credentials': 'true'
		},
		credentials: 'include',
		body: JSON.stringify( body )
	})
	const data: TopLevel = await resp.json()

	return data
}