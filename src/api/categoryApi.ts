import axios from 'axios'
import { ICategory, ICategoryResponseTopLevel } from '../interfaces/categoryInterfaces'
import { settings } from '../config/settings'


const categoryApi = axios.create({
	baseURL: `${ settings.BASE_PATH }/api/categories`,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Credentials': 'true'
	},
	withCredentials: true,
})

export const getCategories = async (): Promise<ICategory[]> => {
	
	const resp = await categoryApi.get<ICategoryResponseTopLevel>( '/' )

	return resp.data.categories
}


export default categoryApi