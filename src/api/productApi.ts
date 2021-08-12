import axios from 'axios'
import { 
	IApiCreateProductTopLevel, 
	IAPICategoryProductsTopLevel, 
	IApiUploadProductImageTopLeve,
	IApiProductsByCategoryTopLevel
} from '../interfaces/productInterfaces'
import { settings } from '../config/settings'


const productApi = axios.create({
	baseURL: `${ settings.BASE_PATH }/api/products`,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Credentials': 'true'
	},
	withCredentials: true,
})

export const createProduct = async ( data: any ): Promise<IApiCreateProductTopLevel> => {

	try {

		const resp = await productApi.post<IApiCreateProductTopLevel>('/', data)

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

		const resp = await productApi.post<IApiUploadProductImageTopLeve>( '/upload-product-images', body , {
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

export const getFlashSales = async (): Promise<IAPICategoryProductsTopLevel> => {
	
	try {
		
		const resp = await productApi.get<IAPICategoryProductsTopLevel>( '/flash-sales' )

		return resp.data
	} catch ( error ) {
		
		const resp: IAPICategoryProductsTopLevel = error.response.data

		return resp
	}
}

export const getProductsByCategory = async ( category: string, limit: number = 12, page: number = 0 ): Promise<IApiProductsByCategoryTopLevel> => {
	
	try {
		
		const resp = await productApi.get<IApiProductsByCategoryTopLevel>( `/by-category/${ category }?limit=${ limit }&page=${ page }`)

		return resp.data
	} catch ( error ) {
		
		const resp: IApiProductsByCategoryTopLevel = error.response.data

		return resp
	}
}