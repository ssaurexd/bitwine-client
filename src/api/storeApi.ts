import axios from 'axios'

import { settings } from '../config/settings'


export const storeApi = axios.create({
	baseURL: `${ settings.BASE_PATH }/api/stores`,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Credentials': 'true'
	},
	withCredentials: true,
})