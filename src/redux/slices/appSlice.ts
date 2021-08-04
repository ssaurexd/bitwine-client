import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IBannerProduct, IProduct } from '../../interfaces/product'


interface ISettings {

}
type ServerityType = 
	'warning' |
	'success' |
	'error' |
	'info'

interface IGlobalToast {
	msg: string,
	isOpen: boolean,
	duration: number,
	severity: ServerityType
}
interface IHome {
	products: {
		sliderProducts: IBannerProduct[],
		bestSales: IProduct[],
		flashSale: IProduct[]
	}
}
interface IApp {
	settings?: ISettings,
	globalToast: IGlobalToast,
	home: IHome
}

const initialState: IApp = {
	globalToast: {
		isOpen: false,
		msg: '',
		duration: 0,
		severity: 'success'
	},
	home: {
		products: {
			bestSales: [],
			flashSale: [],
			sliderProducts: []
		}
	}
} 

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		closeToast: ( state ) => {
			return {
				...state,
				globalToast: {
					duration: 0,
					isOpen: false,
					msg: '',
					severity: 'success'
				}
			}
		},
		openToast: ( state, action: PayloadAction<IGlobalToast> ) => {
			return {
				...state,
				globalToast: {
					...action.payload
				}
			}
		},
		initHome: ( state, action: PayloadAction<IHome> ) => {
			return {
				...state,
				home: action.payload
			}
		}
	}
})

export const {
	closeToast,
	openToast,
	initHome
} = appSlice.actions
export default appSlice.reducer