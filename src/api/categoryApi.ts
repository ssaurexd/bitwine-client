import axios, { AxiosError } from 'axios'
import { ICategory, ICategoryResponseTopLevel } from '../interfaces/categoryInterfaces'
import { settings } from '../config/settings'
import { getToken } from '../helpers/auth'


const categoryApi = axios.create({
	baseURL: `${ settings.BASE_PATH }/api/categories`,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Credentials': 'true'
	},
	withCredentials: true,
})

export const getCategories = async (): Promise<ICategory[]> => {
	
	try {
		
		const token = getToken()
		const resp = await categoryApi.get<ICategoryResponseTopLevel>( '/', { headers: { 'x-token': token } } )
	
		return resp.data.categories
	} catch ( error ) {

		const err = error as AxiosError<ICategoryResponseTopLevel>
		const resp = err.response?.data as ICategoryResponseTopLevel

		return resp.categories
	}
}


export default categoryApi