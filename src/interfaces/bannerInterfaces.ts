


export interface IBanner {
	_id: string,
	title: string,
	description: string,
	productSlug: string,
	productImg: string,
	isActive: boolean
}

export interface IApiBannerHomeTopLevel {
	ok: boolean,
	total: number,
	page: number,
	nextPage: number,
	next: boolean,
	previousPage: number,
	previous: boolean,
	banners: IBanner[],
} 