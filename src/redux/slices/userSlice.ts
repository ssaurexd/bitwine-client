import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserAddress } from '../../interfaces/user'

import { resetStore } from './storeSlice'


export type Roles = 
	'guest' |
	'user' |
	'admin'

interface UserState{
	_id: string,
	email: string,
	name: string,
	lastName: string,
	isLoggedIn: boolean,
	role: Roles,
	address?: IUserAddress[]
	loading?: boolean,
	avatar?:string
}

const initialState: UserState = {
	_id: '',
	email: '',
	name: '',
	lastName: '',
	role: 'guest',
	avatar: '',
	address: [],
	isLoggedIn: false,
	loading: false
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logInStart: ( state ) => {

			state.loading = true
		},
		logInFail: ( state ) => {

			state.loading = false
		},
		signUpStart: ( state ) => {

			state.loading = true
		},
		signUpFail: ( state ) => {

			state.loading = false
		},
		logIn: ( state, action: PayloadAction<UserState> ) => {

			localStorage.setItem( 'isLoggedIn', JSON.stringify( action.payload.isLoggedIn ) )

			return { ...action.payload, loading: false }
		},
		logOut: ( state ) => {
			
			localStorage.removeItem( 'isLoggedIn' )
			localStorage.removeItem( 'token' )
			localStorage.removeItem( 'rememberMe' )
			
			resetStore()
			return initialState
		},
		setUserAvatar: ( state, { payload }: PayloadAction<{ imagePath: string }> ) => {

			state.avatar = payload.imagePath
		},
		resetLoading: ( state ) => {

			state.loading = false
		}
	}
})
export const {
	logIn,
	logOut,
	logInStart,
	logInFail,
	resetLoading,
	signUpFail,
	signUpStart,
	setUserAvatar
} = userSlice.actions

export default userSlice.reducer