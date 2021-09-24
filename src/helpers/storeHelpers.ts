import { IStoreItem } from '../interfaces/storeIntergaces'


export const getTotalDiscount = ( items: IStoreItem[] ): number => {
	
	let totalDiscount: number = 0

	items.map( item => {

		const itemDiscount: number = item.price - item.priceWithDiscount
		totalDiscount = totalDiscount + ( itemDiscount * item.count )  
	})

	return totalDiscount
}

export const getSubTotalWithoutDiscount = ( items: IStoreItem[], tax: number ): number => {
	
	let subTotal: number = 0

	items.map( item => {

		subTotal = subTotal + ( item.count * item.price )
	})

	return subTotal - tax
}