import { IBanner } from './bannerInterfaces'
import { IProduct } from './productInterfaces'
import { IUserAddress } from './user'

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
		sliderProducts: IBanner[],
		pinkWine: IProduct[],
		flashSale: IProduct[],
		products: IProduct[]
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
	dashboard: IDashboard,
	paymentInfo: {
		stepTwo: IUserAddress
	}
}
export interface IApiErrorResponse {
	ok: boolean,
	msg: string
}



declare global {
    interface Window { 
		gtag: any
	}
}