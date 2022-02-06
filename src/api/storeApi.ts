import axios, { AxiosError } from 'axios'

import { settings } from '../config/settings'
import { getToken } from '../helpers/auth'
import { IApiResponseResetStoreByType, IStoreType } from '../interfaces/storeIntergaces'


export const storeApi = axios.create({
	baseURL: `${ settings.BASE_PATH }/api/stores`,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Credentials': 'true'
	},
	withCredentials: true,
})

export const resetStoreByUIDType = async ( type: IStoreType, uid: string ): Promise<IApiResponseResetStoreByType> => {
	
	try {

		const token = getToken()
		const resp = await storeApi.post<IApiResponseResetStoreByType>( `/reset-store/${ uid }/${ type }`, {}, {
			headers: {
				'x-token': token
			}
		})

		return resp.data
	} catch ( error ) {
		
		const err = error as AxiosError<IApiResponseResetStoreByType>
		const resp = err.response?.data as IApiResponseResetStoreByType

		return resp
	}
}