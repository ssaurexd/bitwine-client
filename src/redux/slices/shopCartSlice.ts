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
				
			}
		},
		getItems: ( state ) => {

			const itemsFromLocal = localStorage.getItem('shopCart') || []

			return {
				...state,
				items: state.items.push( itemsFromLocal )
			}
		}
	}
})

export const {
	addItem
} = shopCartSlice.actions

export default shopCartSlice.reducer