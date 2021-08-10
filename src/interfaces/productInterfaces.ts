
export interface IProduct {
	id:          number;
	title:       string;
	price:       number;
	description: string;
	category:    string;
	image:       string;
}
export interface IProduct2 {
	name: string,
	price: number,
	discount: number,
	priceWithDiscount: number,
	description: string,
	categories: string[],
	image: [],
	images: []
}

export interface IBannerProduct {
	image: string,
	id: number
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