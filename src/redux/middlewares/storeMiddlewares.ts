import { createAsyncThunk } from '@reduxjs/toolkit'

import { storeApi } from '../../api/storeApi'
import { RootState } from '../store'
import { 
	IAddItemStore, 
	IApiInitStoreTopLevel, 
	IApiResponseAddItem, 
	IApiResponseUpdateItem, 
	IStore,
	IUpdateItemStore,
} from '../../interfaces/storeIntergaces'
import { getTotalShopCart } from '../../helpers/helpers'


const initialState: IStore = {
	shopCart: {
		items: [],
		total: 0
	},
	wishList: {
		items: []
	}
}

/* --START-- thunks
-------------------------------------------------------- */
export const initStore = createAsyncThunk<IStore, void, { state: RootState }>(
	'shopCart/initStore',
	async ( _, { getState } ) => {

		try {
			
			const { _id } = getState().user
			const resp = await storeApi.get<IApiInitStoreTopLevel>( `/${ _id }` )
			const data: IStore = {
				shopCart: {
					items: resp.data.shopCart?.products === null ? [] : resp.data.shopCart?.products,
					total: getTotalShopCart( resp.data.shopCart?.products === null ? [] : resp.data.shopCart?.products )
				}, 
				wishList: { items: resp.data.wishList?.products === null ? [] : resp.data.wishList?.products ?? [] }
			}

			return data
		} catch ( error ) {

			return initialState
		}
	}
)

export const addItemStoreThunk = createAsyncThunk<IAddItemStore, IAddItemStore, { state: RootState }>(
	'shopCart/addItemStoreThunk',
	async ({ item, type }, { getState } ) => {

		const { _id, isLoggedIn } = getState().user
		const { items } = getState().store[type]
		const alreadyProductExist = items.find( prod => prod._id === item._id ) 

		try {

			if( !alreadyProductExist && isLoggedIn ) {

				await storeApi.post<IApiResponseAddItem>( `/${ _id }/${ type }`, JSON.stringify({ product: item }) )
			}
			
			return {
				item, 
				type
			}
		} catch ( error ) {
			return {
				item, 
				type
			}
		}
	}
)

export const updateCountItemStoreThunk = createAsyncThunk<IUpdateItemStore, IUpdateItemStore, { state: RootState }>(
	'shopCart/updateCountItemStoreThunk',
	async ({ item, type, count }, { getState } ) => {

		const { _id, isLoggedIn } = getState().user
		const { items } = getState().store[type]
		const alreadyProductExist = items.find( item => item._id === item._id ) 

		try {

			if( alreadyProductExist && isLoggedIn ) {

				await storeApi.put<IApiResponseUpdateItem>( `/${ _id }/${ type }`, JSON.stringify({ productId: item._id, count }) )
			}
			
			return {
				item, 
				type,
				count
			}
		} catch ( error ) {

			return {
				item, 
				type,
				count
			}
		}
	}
)
/* --END-- thunks
-------------------------------------------------------- */

/* --START-- actions
-------------------------------------------------------- */
/* --END-- actions
-------------------------------------------------------- */