import axios, { AxiosError } from 'axios'

import { settings } from '../config/settings'
import { IProduct } from '../interfaces/productInterfaces'
import { IShipment } from '../interfaces/storeIntergaces'


export const salesApi = axios.create({
	baseURL: `${ settings.BASE_PATH }/api/sales`,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Credentials': 'true'
	},
	withCredentials: true,
})

//TODO: crear la rest api para enviar una sale
/* export const processPayment = async ( values: { items: IProduct[], total: number, shipment: IShipment } ) => {
	
	try {

		const resp = await salesApi.post<IApiSearchProductTopLevel>( '/search-by-query', JSON.stringify({ query }))

		return resp.data
	} catch ( error ) {
		
		const err = error as AxiosError<IApiSearchProductTopLevel>
		const resp = err.response?.data as IApiSearchProductTopLevel

		return resp
	}
} */