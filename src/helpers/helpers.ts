import { IStoreItem } from "../interfaces/storeIntergaces"


export const numberToDecimals = ( number: number, decimals: number = 2 ): number => {
	
	const newNumber: string = number.toFixed( decimals )

	return parseFloat( newNumber )
}

export const getTotalShopCart = ( products: IStoreItem[] ): number => {

	let total: number = 0

	products.map( product => {
		total += product.count * product.priceWithDiscount
	})

	return numberToDecimals( total )
}