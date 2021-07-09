import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export type Roles = 
	'' |
	'user' |
	'admin'

interface UserState{
	_id: string,
	email: string,
	name: string,
	lastName: string,
	isLoggedIn: boolean,
	role: Roles,
	loading?: boolean
}

const initialState: UserState = {
	_id: '',
	email: '',
	name: '',
	lastName: '',
	role: '',
	isLoggedIn: false,
	loading: false
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logInStart: ( state ) => {
			return {
				...state,
				loading: true
			}
		},
		logInFail: ( state ) => {
			return {
				...state,
				loading: false
			}
		},
		logIn: ( state, action: PayloadAction<UserState> ) => {
			return { ...action.payload, loading: false }
		}
	}
})
export const {
	logIn,
	logInStart,
	logInFail
} = userSlice.actions

export default userSlice.reducer