import { IBannerProduct, IProduct } from './productInterfaces'

/* --START-- toast
-------------------------------------------------------- */
export type ServerityType = 
	'warning' |
	'success' |
	'error' |
	'info'

export interface IGlobalToast {
	msg: string,
	isOpen: boolean,
	duration: number,
	severity: ServerityType
}
/* --END-- toast
-------------------------------------------------------- */

/* --START-- home
-------------------------------------------------------- */
export interface IHome {
	products: {
		sliderProducts: IBannerProduct[],
		pinkWine: IProduct[],
		flashSale: IProduct[]
	}
}
/* --END-- home
-------------------------------------------------------- */

/* --START-- dashboard
-------------------------------------------------------- */
export interface IDashboard {
	sidebarOpen: boolean,
	menu: IDashboardMenu
}
export interface IDashboardMenu {
	avatarOpen: boolean,
	productOpen: boolean
}
export interface IChangeDashboardMenuItem {
	key: 'avatarOpen' | 'productOpen',
	value: boolean
}
/* --END-- dashboard
-------------------------------------------------------- */

export interface IApp {
	globalToast: IGlobalToast,
	home: IHome,
	dashboard: IDashboard
}