import axios from 'axios'
import { ICategory, ICategoryResponseTopLevel } from '../interfaces/categoryInterfaces'


const categoryApi = axios.create({
	baseURL: 'http://localhost:3001/api/categories',
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