import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { numberToDecimals } from '../../helpers/helpers'
import { 
	IAddShipmentPricePayload,
	IStore
} from '../../interfaces/storeIntergaces'
import {
	addItemStoreThunk,
	deleteItemStoreThunk,
	initStore,
	updateCountItemStoreThunk
} from '../middlewares/storeMiddlewares'


const initialState: IStore = {
	shopCart: {
		items: [],
		total: 0,
		shipment: 0
	},
	wishList: {
		items: []
	}
}

const storeSlice = createSlice({
	initialState,
	name: 'shopCart',
	reducers: {
		resetStore: ( state ) => initialState,
		addShipmentPrice: ( state, { payload }: PayloadAction<IAddShipmentPricePayload> ) => {

			state.shopCart.shipment = payload.shipmentPrice
		}
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
	
						state.shopCart.items = [ ...state.shopCart.items, action.payload.item ]
						state.shopCart.total = total
						break
					
					case 'wishList': 

						state.wishList.items = [ ...state.wishList.items, action.payload.item ]
						break
				}
			})
			.addCase( updateCountItemStoreThunk.fulfilled, ( state, action ) => {

				const alreadyProductExist = state.shopCart.items.find( item => item._id === action.payload.item._id ) 

				if( alreadyProductExist ) {

					state.shopCart.items = state.shopCart.items.map( item => {
	
						if ( item._id === action.payload.item._id ) {
							item.count = action.payload.count
						}
						return item
					}) 
					let numberTotal: number = 0 
					state.shopCart.items.map( item =>  numberTotal = numberTotal + ( item.count * item.priceWithDiscount ) )
					const total: number = numberToDecimals( numberTotal )
					state.shopCart.total = total
				} else {

					return state
				}
			})
			.addCase( deleteItemStoreThunk.fulfilled, ( state, { payload } ) => {
				
				state[payload.type].items = state[payload.type].items.filter( item => item._id !== payload.productId )
				let numberTotal: number = 0 
				state.shopCart.items.map( item =>  numberTotal = numberTotal + ( item.count * item.priceWithDiscount ) )
				const total: number = numberToDecimals( numberTotal )
				state.shopCart.total = total
			})
	}
})

export const {
	resetStore,
	addShipmentPrice
} = storeSlice.actions

export default storeSlice.reducer