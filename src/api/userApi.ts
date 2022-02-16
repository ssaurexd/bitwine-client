import axios, { AxiosError } from 'axios'

import { getRememberMe, getToken } from '../helpers/auth'
import { settings } from '../config/settings'
import { 
	IAPILoginTopLevel,
	IAPIRefreshTokenTopLevel,
	IAPILogOutTopLevel,
	IUserAddress,
	IAPIAddNewAddress,
	IApiUploadAvatarImageResponse,
	IAPIGlobalResponse,
	IApiChangeUserPasswordResponse
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

		return resp
	}
}

export const userAuthSignup = async ( body: any  ): Promise<IAPILoginTopLevel> => {

	try {
		const resp = await userApi.post<IAPILoginTopLevel>( '/signup', JSON.stringify( body ) )
		
		return resp.data
	} catch ( error ) {
		
		const err = error as AxiosError<IAPILoginTopLevel>
		const resp = err.response?.data as IAPILoginTopLevel

		return resp
	}
}

export const userAuthRefreshToken = async (): Promise<IAPIRefreshTokenTopLevel> => {

	try {
		const token = getToken()
		const resp = await userApi.post<IAPIRefreshTokenTopLevel>( '/refresh-token', {}, { headers: { 'x-token': token } } )
	
		return resp.data
	} catch ( error ) {
		
		const err = error as AxiosError<IAPIRefreshTokenTopLevel>
		const resp = err.response?.data as IAPIRefreshTokenTopLevel

        console.log("🚀 ~ file: userApi.ts ~ line 65 ~ userAuthRefreshToken ~ resp", resp)
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

/* address newone */
export const userAddNewAddress = async ( values: IUserAddress, uid: string ): Promise<IAPIAddNewAddress> => {

	try {
		const token = getToken()
		const resp = await userApi.put<IAPIAddNewAddress>( `/edit-address/${ uid }`, values, { headers: { 'x-token': token } } )
	
		return resp.data
	} catch ( error ) {
		
		const err = error as AxiosError<IAPIAddNewAddress>
		const resp = err.response?.data as IAPIAddNewAddress
		
        console.log("🚀 ~ file: userApi.ts ~ line 97 ~ userAddNewAddress ~ resp", resp)
		return resp
	}
}

/* subir imagen con destino a /images/avatars/.img */
export const uploadUserAvatar = async ( data: any ): Promise<IApiUploadAvatarImageResponse> => {

	const body = new FormData()
	body.append( 'image', data[0] )

	try {
		const token = getToken()
		const resp = await userApi.put<IApiUploadAvatarImageResponse>( '/change-avatar', body , {
			headers: {
				'Content-Type': 'multipart/form-data',
				'Access-Control-Allow-Credentials': 'true',
				'x-token': token
			}
		})

		return resp.data
	} catch ( error ) {

		const err = error as AxiosError<IApiUploadAvatarImageResponse>
		const resp = err.response?.data as IApiUploadAvatarImageResponse

		return resp
	}
}

export const updateUserProfile = async ( data: any ): Promise<IAPIGlobalResponse> => {

	try {
		const token = getToken()
		const resp = await userApi.put<IAPIGlobalResponse>( '/edit-user', data , {
			headers: {
				'Access-Control-Allow-Credentials': 'true',
				'x-token': token
			}
		})

		return resp.data
	} catch ( error ) {

		const err = error as AxiosError<IAPIGlobalResponse>
		const resp = err.response?.data as IAPIGlobalResponse

		return resp
	}
}

export const changeUserPassword = async ( data: any ): Promise<IApiChangeUserPasswordResponse> => {

	try {
		const token = getToken()
		const resp = await userApi.put<IApiChangeUserPasswordResponse>( '/change-password', data , {
			headers: {
				'Access-Control-Allow-Credentials': 'true',
				'x-token': token
			}
		})

		return resp.data
	} catch ( error ) {

		const err = error as AxiosError<IApiChangeUserPasswordResponse>
		const resp = err.response?.data as IApiChangeUserPasswordResponse

		return resp
	}
}