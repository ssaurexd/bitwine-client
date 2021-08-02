import { createSlice, PayloadAction } from '@reduxjs/toolkit'


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
interface IApp {
	settings?: ISettings,
	globalToast: IGlobalToast 
}

const initialState: IApp = {
	globalToast: {
		isOpen: false,
		msg: '',
		duration: 0,
		severity: 'success'
	}
} 
const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		closeToast: ( state ) => {
			return {
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
				globalToast: {
					...action.payload
				}
			}
		}
	}
})

export const {
	closeToast,
	openToast
} = appSlice.actions
export default appSlice.reducer