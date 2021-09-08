import axios, { AxiosError } from 'axios'
import { 
	IApiCreateProductTopLevel, 
	IAPICategoryProductsTopLevel, 
	IApiUploadProductImageTopLeve,
	IApiProductsTopLevel,
	IApiProductTopLevel,
	IApiProductStockTopLevel
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

		const err = error as AxiosError<IApiCreateProductTopLevel>
		const resp = err.response?.data as IApiCreateProductTopLevel

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

		const err = error as AxiosError<IApiUploadProductImageTopLeve>
		const resp = err.response?.data as IApiUploadProductImageTopLeve

		return resp
	}
}

export const getFlashSales = async (): Promise<IAPICategoryProductsTopLevel> => {
	
	try {
		
		const resp = await productApi.get<IAPICategoryProductsTopLevel>( '/flash-sales' )

		return resp.data
	} catch ( error ) {
		
		const err = error as AxiosError<IAPICategoryProductsTopLevel>
		const resp = err.response?.data as IAPICategoryProductsTopLevel

		return resp
	}
}

export const getProductsByCategory = async ( category: string, limit: number = 12, page: number = 0 ): Promise<IApiProductsTopLevel> => {
	
	try {
		
		const resp = await productApi.get<IApiProductsTopLevel>( `/by-category/${ category }?limitQuery=${ limit }&pageQuery=${ page }`)

		return resp.data
	} catch ( error ) {
		
		const err = error as AxiosError<IApiProductsTopLevel>
		const resp = err.response?.data as IApiProductsTopLevel

		return resp
	}
}

export const getProducts = async ( limit: number = 12, page: number = 0 ): Promise<IApiProductsTopLevel> => {
	
	try {
		
		const resp = await productApi.get<IApiProductsTopLevel>( `/?limitQuery=${ limit }&pageQuery=${ page }`)

		return resp.data
	} catch ( error ) {
		
		const err = error as AxiosError<IApiProductsTopLevel>
		const resp = err.response?.data as IApiProductsTopLevel

		return resp
	}
}

export const getAllProducts = async (): Promise<IApiProductsTopLevel> => {
	
	try {
		
		const resp = await productApi.get<IApiProductsTopLevel>( '/list-all' )

		return resp.data
	} catch ( error ) {
		
		const err = error as AxiosError<IApiProductsTopLevel>
		const resp = err.response?.data as IApiProductsTopLevel

		return resp
	}
}

export const getProductBySlug = async ( slug: string ): Promise<IApiProductTopLevel> => {
	
	try {
		
		const resp = await productApi.get<IApiProductTopLevel>( `/by-slug/${ slug }` )

		return resp.data
	} catch ( error ) {
		
		const err = error as AxiosError<IApiProductTopLevel>
		const resp = err.response?.data as IApiProductTopLevel

		return resp
	}
}

export const getProductStockById = async ( productId: string ): Promise<IApiProductStockTopLevel> => {
	
	try {
		
		const resp = await productApi.post<IApiProductStockTopLevel>( '/product-stock', JSON.stringify({ productId }) )

		return resp.data
	} catch ( error ) {

		const err = error as AxiosError<IApiProductStockTopLevel>
		const resp = err.response?.data as IApiProductStockTopLevel

		return resp
	}
}