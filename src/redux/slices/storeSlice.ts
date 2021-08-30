import { createSlice } from '@reduxjs/toolkit'

import { numberToDecimals } from '../../helpers/helpers'
import { 
	IStore
} from '../../interfaces/storeIntergaces'
import {
	addItemStoreThunk,
	initStore
} from '../middlewares/storeMiddlewares'


const initialState: IStore = {
	shopCart: {
		items: [],
		total: 0
	},
	wishList: {
		items: []
	}
}

const storeSlice = createSlice({
	initialState,
	name: 'shopCart',
	reducers: {
	},
	extraReducers: ( builder ) => {
		builder
			.addCase( initStore.fulfilled, ( state, action ) => {

				state.shopCart = action.payload.shopCart
				state.wishList = action.payload.wishList
			})
			.addCase( addItemStoreThunk.fulfilled, ( state, action ) => {

				switch ( action.payload.type ) {

					case 'shopCart':

						const alreadyProductExist = state.shopCart.items.find( item => item._id === action.payload.item._id ) 

						if( alreadyProductExist ) {

							return state
						}
						
						const numberTotal = state.shopCart.total + action.payload.item.count * action.payload.item.priceWithDiscount
						const total: number = numberToDecimals( numberTotal )
	
						return {
							...state,
							shopCart: {
								items: [ ...state.shopCart.items, action.payload.item ],
								total
							}
						}
					
					case 'wishList': 
						state.wishList.items = [ ...state.wishList.items, action.payload.item ]
				}
			})
	}
})

export const {
} = storeSlice.actions

export default storeSlice.reducer