import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {  
	IApp,
	IChangeDashboardMenuItem,
	IGlobalToast,
	IHome
} from '../../interfaces/appInterfaces'


const initialState: IApp = {
	globalToast: {
		isOpen: false,
		msg: '',
		duration: 0,
		severity: 'success'
	},
	home: {
		products: {
			pinkWine: [],
			flashSale: [],
			sliderProducts: [],
			products: []
		}
	},
	dashboard: {
		sidebarOpen: true,
		menu: {
			avatarOpen: false,
			productOpen: false
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
		}, 
		changeDashboardMenuItem: ( state, action: PayloadAction<IChangeDashboardMenuItem> ) => {
			return {
				...state,
				dashboard: {
					...state.dashboard,
					menu: {
						...state.dashboard.menu,
						[action.payload.key]: action.payload.value
					}
				}
			}
		},
		changeSidebar: ( state, action ) => {
			return {
				...state,
				dashboard: {
					...state.dashboard,
					sidebarOpen: action.payload
				}
			}
		}
	}
})

export const {
	closeToast,
	openToast,
	initHome,
	changeDashboardMenuItem,
	changeSidebar
} = appSlice.actions
export default appSlice.reducer