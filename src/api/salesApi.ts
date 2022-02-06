import axios, { AxiosError } from 'axios'

import { settings } from '../config/settings'
import { getToken } from '../helpers/auth'
import { IAPIGetPendingSales, IAPISaleAddNewOneResponse, IProcessPayment } from '../interfaces/salesInterfaces'


export const salesApi = axios.create({
	baseURL: `${ settings.BASE_PATH }/api/sales`,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Credentials': 'true'
	},
	withCredentials: true,
})

export const processPayment = async ( values: IProcessPayment ): Promise<IAPISaleAddNewOneResponse> => {
	
	try {
		const data = {
			uid: values.uid,
			email: values.email,
			products: values.items,
			shipment: values.shipment,
			address: values.address
		}
		const resp = await salesApi.post<IAPISaleAddNewOneResponse>( '/add-new-sale', JSON.stringify( data ) )

		return resp.data
	} catch ( error ) {
		
		const err = error as AxiosError<IAPISaleAddNewOneResponse>
		const resp = err.response?.data as IAPISaleAddNewOneResponse

		return resp
	}
}

export const getPendingSales = async ( ): Promise<IAPIGetPendingSales> => {
	
	try {

		const token = getToken()
		const resp = await salesApi.post<IAPIGetPendingSales>( '/get-all-pending', {}, {
			headers: {
				'x-token': token
			}
		})

		return resp.data
	} catch ( error ) {
		
		const err = error as AxiosError<IAPIGetPendingSales>
		const resp = err.response?.data as IAPIGetPendingSales

		return resp
	}
}