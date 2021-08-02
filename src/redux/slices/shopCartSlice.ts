import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface IShopCartItem {
	id: string,
	price: number,
	count: number,
	title: string,
	image: string
}
export interface IShopCart {
	items: IShopCartItem[],
	total: number 
} 
const initialState: IShopCart = {
	items: [],
	total: 0
}

const shopCartSlice = createSlice({
	initialState,
	name: 'shopCart',
	reducers: {
		addItem: ( state, action ) => {
			return {
				...state,
				items: [ ...state.items, action.payload ]
			}
		}
	}
})

export const {
	addItem
} = shopCartSlice.actions

export default shopCartSlice.reducer