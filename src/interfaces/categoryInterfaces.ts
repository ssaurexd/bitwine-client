export interface ICategoryResponseTopLevel {
	ok: boolean,
	categories: ICategory[]
}
export interface ICategory {
	_id: string,
	name: string,
	value: string
} 