import {
	ICategory
} from './categoryInterfaces'


export interface IProduct {
	_id: string,
	discount: number,
	categories: ICategory[],
	images: string[],
	onStock: number,
	name: string,
	price:number,
	priceWithDiscount: number,
	description: string,
	image: string,
	rate: any[],
	createdAt: string,
	updatedAt: string,
	slug: string,
}

/* --START-- create product
-------------------------------------------------------- */
export interface Error {
	msg:      string;
	param:    string;
	location: string;
}
export interface IApiCreateProductTopLevel {
	errors: Error[]
	msg: string,
	ok: boolean,
	product: IProduct
}
/* --END-- create product
-------------------------------------------------------- */

/* --START-- upload image product
-------------------------------------------------------- */
export interface IApiUploadProductImageTopLeve {
	ok: boolean,
	msg: string,
	imagePath: string,
	imagesPath: string[]
}
/* --END-- upload image product
-------------------------------------------------------- */

export interface IAPICategoryProductsTopLevel {
	ok:       boolean,
	products: IProduct[],
	msg: string
}
export interface IApiProductsTopLevel {
	ok:       boolean,
	total: number,
	page: number,
	nextPage: number,
	next: boolean,
	previousPage: number,
	previous: boolean,
	products: IProduct[],
}
export interface IApiProductTopLevel {
	ok: boolean,
	msg: string,
	product: IProduct,
	related: IProduct[]
}