import axios, { AxiosError } from 'axios'

import { settings } from '../config/settings'
import { IAPISaleAddNewOneResponse, IProcessPayment } from '../interfaces/salesInterfaces'


export const salesApi = axios.create({
	baseURL: `${ settings.BASE_PATH }/api/sales`,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Credentials': 'true'
	},
	withCredentials: true,
})

//TODO: crear la rest api para enviar una sale
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
        console.log("🚀 ~ file: salesApi.ts ~ line 28 ~ processPayment ~ resp", resp.data)

		return resp.data
	} catch ( error ) {
		
		const err = error as AxiosError<IAPISaleAddNewOneResponse>
		const resp = err.response?.data as IAPISaleAddNewOneResponse

		return resp
	}
}