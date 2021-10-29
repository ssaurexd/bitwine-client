import axios, { AxiosError } from 'axios'

import { settings } from '../config/settings'
import { IApiBannerHomeTopLevel } from '../interfaces/bannerInterfaces'


const bannerApi = axios.create({
	baseURL: `${ settings.BASE_PATH }/api/banners`,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Credentials': 'true'
	},
	withCredentials: true,
})

export const getBannersForHome = async ( ): Promise<IApiBannerHomeTopLevel> => {
	
	try {
		
		const resp = await bannerApi.get<IApiBannerHomeTopLevel>( '/get-banners-for-home' )

		return resp.data
	} catch ( error ) {
		
		const err = error as AxiosError<IApiBannerHomeTopLevel>
		const resp = err.response?.data as IApiBannerHomeTopLevel

		return resp
	}
}