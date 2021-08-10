import axios from 'axios'
import { toBase64 } from '../helpers/files'
import { IApiCreateProductTopLevel, IApiUploadProductImageTopLeve, IProduct2 } from '../interfaces/productInterfaces'

import apiConfig from './'


const pruductApi = axios.create({
	baseURL: `${ apiConfig.BASE_PATH }/api/products`,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Credentials': 'true'
	},
	withCredentials: true,
})

export const createProduct = async ( data: any ): Promise<IApiCreateProductTopLevel> => {

	try {

		const resp = await pruductApi.post<IApiCreateProductTopLevel>('/', data)

		return resp.data
	} catch ( error ) {

		const resp: IApiCreateProductTopLevel = error.response.data

		return resp
	}
}

export const uploadProductImages = async ( data: any ): Promise<IApiUploadProductImageTopLeve> => {

	const body = new FormData()
	body.append( 'image', data.image[0] )

	data.images.map( (file: any) => {

		body.append( 'images', file )
	}) 

	try {

		const resp = await pruductApi.post<IApiUploadProductImageTopLeve>( '/upload-product-images', body , {
			headers: {
				'Content-Type': 'multipart/form-data',
				'Access-Control-Allow-Credentials': 'true'
			}
		})

		return resp.data
	} catch ( error ) {

		const resp: IApiUploadProductImageTopLeve = error.response.data

		return resp
	}
}
