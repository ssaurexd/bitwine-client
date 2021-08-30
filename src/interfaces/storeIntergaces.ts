
export interface IStoreItem {
	_id: string,
	price: number,
	discount: number,
	priceWithDiscount: number,
	count: number,
	name: string,
	description: string,
	slug: string,
	image: string
}
export type IStoreType = 'shopCart' | 'wishList'
export interface IStore {
	shopCart: {
		items: IStoreItem[],
		total: number 
	},
	wishList: {
		items: IStoreItem[]
	}
} 
export interface IApiInitStoreTopLevel {
	ok: boolean,
	shopCart: IApiStoreTypeContainer,
	wishList: IApiStoreTypeContainer
}
export interface IApiResponseAddItem {
	ok: boolean,
	msg: string
}
export interface IApiStoreTypeContainer {
	_id: string,
	uid: string,
	type: IStoreType,
	products: IStoreItem[]
}

/* --START-- funtions
-------------------------------------------------------- */
/* addItem */
export interface IAddItemStore {
	item: IStoreItem,
	type: IStoreType
}
/* --END-- funtions
-------------------------------------------------------- */