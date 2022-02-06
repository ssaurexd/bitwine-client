import { IStoreItem } from "../interfaces/storeIntergaces"
import { settings } from '../config/settings'


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

export const getLinkImage = ( img: string ): string => {
	
	return `${ settings.BASE_PATH }/${ img }`
}

export const removeHTMLTags = ( value: string ): string => {
	
	return value.replace(/<(?:.|\n)*?>/gm, '')
}