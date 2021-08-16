import axios from 'axios'
import { 
	IApiCreateProductTopLevel, 
	IAPICategoryProductsTopLevel, 
	IApiUploadProductImageTopLeve,
	IApiProductsTopLevel,
	IApiProductTopLevel
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

export const getProductsByCategory = async ( category: string, limit: number = 12, page: number = 0 ): Promise<IApiProductsTopLevel> => {
	
	try {
		
		const resp = await productApi.get<IApiProductsTopLevel>( `/by-category/${ category }?limitQuery=${ limit }&pageQuery=${ page }`)

		return resp.data
	} catch ( error ) {
		
		const resp: IApiProductsTopLevel = error.response.data

		return resp
	}
}

export const getProducts = async ( limit: number = 12, page: number = 0 ): Promise<IApiProductsTopLevel> => {
	
	try {
		
		const resp = await productApi.get<IApiProductsTopLevel>( `/?limitQuery=${ limit }&pageQuery=${ page }`)

		return resp.data
	} catch ( error ) {
		
		const resp: IApiProductsTopLevel = error.response.data

		return resp
	}
}

export const getProductBySlug = async ( slug: string ): Promise<IApiProductTopLevel> => {
	
	try {
		
		const resp = await productApi.get<IApiProductTopLevel>( `/by-slug/${ slug }` )

		return resp.data
	} catch ( error ) {
		
		const resp: IApiProductTopLevel = error.response.data

		return resp
	}
}